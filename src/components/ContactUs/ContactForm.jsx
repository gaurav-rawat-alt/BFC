

import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const SESSION_KEY = "CONTACT_FORM_EMAIL";

const CommonContactForm = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [isError, setIsError] = useState(false);
  const [blocked, setBlocked] = useState(false);

  // Check session on load
  useEffect(() => {
    const sentEmail = sessionStorage.getItem(SESSION_KEY);
    if (sentEmail) {
      setBlocked(true);
      setStatus(
        "You have already submitted a message in this session."
      );
    }
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    if (blocked) return;

    const email = formRef.current.user_email.value;

    setLoading(true);
    setStatus("");
    setIsError(false);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        // Store email in session
        sessionStorage.setItem(SESSION_KEY, email);

        setBlocked(true);
        setStatus(
          "Message sent successfully."
        );

        formRef.current.reset();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setStatus("Something went wrong. Please try again.");
        setIsError(true);
      })
      .finally(() => setLoading(false));
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
              required
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
            required
            disabled={blocked}
            className="w-full rounded-lg border px-4 py-2.5 resize-none"
          />
        </div>

        {/* Submit */}
        <div className="flex items-center gap-4">
          <button
            type="submit"
            disabled={loading || blocked}
            className={`rounded-lg px-6 py-2.5 font-semibold text-white cursor-pointer
              ${
                blocked
                  ? "bg-gray-400 cursor-not-allowed"
                  : loading
                  ? "bg-blue-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
          >
            {blocked ? "Message Already Sent" : loading ? "Sending..." : "Send Message"}
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
