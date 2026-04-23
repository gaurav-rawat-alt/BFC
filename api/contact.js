

const rateLimitMap = new Map();

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  // 🌐 Get IP
  const ip =
    req.headers["x-forwarded-for"]?.split(",")[0]?.trim() ||
    req.headers["x-real-ip"] ||
    req.socket?.remoteAddress ||
    "unknown";

  // ⏱️ RATE LIMIT (3 req / 10 min)
  const now = Date.now();
  const WINDOW = 10 * 60 * 1000;

  const requests = rateLimitMap.get(ip) || [];
  const recent = requests.filter((t) => now - t < WINDOW);

  if (recent.length >= 3) {
    return res.status(429).json({
      message: "Too many requests. Try later.",
    });
  }

  rateLimitMap.set(ip, [...recent, now]);

  try {
    const { name, contact, email, message, company } = req.body || {};

    // 🛡️ Honeypot
    if (company) {
      return res.status(400).json({ message: "Spam detected" });
    }

    // ✅ Required validation
    if (!name || !contact) {
      return res.status(400).json({
        message: "Name and mobile number are required",
      });
    }

    // 📱 Mobile validation (India)
    if (!/^[6-9]\d{9}$/.test(contact)) {
      return res.status(400).json({
        message: "Invalid mobile number",
      });
    }

    // 🚀 Forward to Google Apps Script
    const response = await fetch(process.env.GOOGLE_SCRIPT_URL, {
      method: "POST",
      body: JSON.stringify({
        name,
        contact,
        email: email || "",
        message: message || "",
        company: "", // always empty from backend
      }),
    });

    const data = await response.json();

    if (!data.success) {
      throw new Error(data.message || "Sheet error");
    }

    return res.status(200).json({ success: true });

  } catch (err) {
    console.error("API ERROR:", err);
    return res.status(500).json({
      message: "Server error",
    });
  }
}