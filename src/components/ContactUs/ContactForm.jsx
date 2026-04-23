import { useRef, useState, useEffect } from "react";

const SESSION_KEY = "CONTACT_FORM_EMAIL";

const CommonContactForm = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [isError, setIsError] = useState(false);
  const [blocked, setBlocked] = useState(false);
  const [startTime] = useState(Date.now()); // ⏱️ bot detection

  // Check session on load
  useEffect(() => {
    const sentEmail = sessionStorage.getItem(SESSION_KEY);
    if (sentEmail) {
      setBlocked(true);
      setStatus("You have already submitted a message in this session.");
    }
  }, []);

  const sendEmail = async (e) => {
    e.preventDefault();

    if (blocked) return;

    // ⏱️ time-based bot protection
    if (Date.now() - startTime < 3000) {
      setStatus("You're too fast. Please try again.");
      setIsError(true);
      return;
    }

    const formData = new FormData(formRef.current);

   const payload = {
    name: formData.get("user_name"),
    contact: formData.get("user_contact"),
    email: formData.get("user_email") || "",
    message: formData.get("message") || "",
    company: formData.get("company") || "",
  };

    if (!payload.name || !payload.contact) {
    setStatus("Name and mobile number are required.");
    setIsError(true);
    return;
  }

  // basic mobile validation (India-friendly)
  if (!/^[6-9]\d{9}$/.test(payload.contact)) {
    setStatus("Enter a valid 10-digit mobile number.");
    setIsError(true);
    return;
  }

    setLoading(true);
    setStatus("");
    setIsError(false);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        if (res.status === 429) {
          throw new Error("Too many attempts. Please try again later.");
        }
        throw new Error(data.message || "Something went wrong.");
      }

      // success
      sessionStorage.setItem(SESSION_KEY, payload.email);
      setBlocked(true);
      setStatus("Message sent successfully.");
      formRef.current.reset();

    } catch (err) {
      setStatus(err.message || "Something went wrong.");
      setIsError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="bg-white rounded-xl shadow-md border border-gray-200 p-6 my-4 sm:p-8 space-y-6"
      >
        {/* Header */}
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
            Contact Us
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Fill in the form and we’ll respond shortly.
          </p>
        </div>

        {/* 🛡️ Honeypot (hidden) */}
        <input type="text" name="company" className="hidden" />

        {/* Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="user_name"
              required
              disabled={blocked}
              className="w-full rounded-lg border px-4 py-2.5"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="user_email"
              disabled={blocked}
              className="w-full rounded-lg border px-4 py-2.5"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Contact Number
            </label>
            <input
              type="tel"
              name="user_contact"
              required
              disabled={blocked}
              className="w-full rounded-lg border px-4 py-2.5"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            name="message"
            rows="5"
            disabled={blocked}
            className="w-full rounded-lg border px-4 py-2.5 resize-none"
          />
        </div>

        {/* Submit */}
        <div className="flex items-center gap-4">
          <button
            type="submit"
            disabled={loading || blocked}
            className={`rounded-lg px-6 py-2.5 font-semibold text-white
              ${
                blocked
                  ? "bg-gray-400 cursor-not-allowed"
                  : loading
                  ? "bg-blue-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
          >
            {blocked
              ? "Message Already Sent"
              : loading
              ? "Sending..."
              : "Send Message"}
          </button>

          {status && (
            <p
              className={`text-sm ${
                isError ? "text-red-600" : "text-green-600"
              }`}
            >
              {status}
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default CommonContactForm;