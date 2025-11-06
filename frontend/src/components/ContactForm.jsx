import React, { useState } from "react";
import "../assets/styles/_contact-form.scss";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("idle"); // idle | loading | success | error
   const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Please enter your name.";
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim())
      newErrors.message = "Please write a message.";
    return newErrors;
  };


  const handleSubmit = async (e) => {
    const apiUrl = import.meta.env.VITE_API_URL;
    e.preventDefault();
    
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
  
    setStatus("loading");

  try {
  const response = await fetch(`${apiUrl}/send`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });

  const data = await response.json();
  console.log("📨 Server response:", data);

  if (response.ok) {
    setStatus("success");
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setStatus("idle"), 4000);
  } else {
    setStatus("error");
    setTimeout(() => setStatus("idle"), 4000);
  }
} catch (error) {
  console.error("Error sending message:", error);
  setStatus("error");
  setTimeout(() => setStatus("idle"), 4000);
}

  return (
    <form
      onSubmit={handleSubmit}
      className="contact-form"
      noValidate
    >
       {/* ---------- Name ---------- */}
      <div className="row gy-4">
        <div className="col-md-6">
          <label htmlFor="name" className="form-label">
            Your Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`contact-form__input form-control ${
              errors.name ? "is-invalid" : ""
            }`}
            placeholder="Your Name"
            aria-describedby="error-name"
            required
          />
          {errors.name && (
            <div id="error-name" className="contact-form__error-field">
              {errors.name}
            </div>
          )}
        </div>

        {/* ---------- Email ---------- */}
        <div className="col-md-6">
          <label htmlFor="email" className="form-label">
            Your Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`contact-form__input form-control ${
              errors.email ? "is-invalid" : ""
            }`}
            placeholder="Your Email"
            aria-describedby="error-email"
            required
          />
          {errors.email && (
            <div id="error-email" className="contact-form__error-field">
              {errors.email}
            </div>
          )}
        </div>

        {/* ---------- Message ---------- */}
        <div className="col-md-12">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="6"
            className={`contact-form__textarea form-control ${
              errors.message ? "is-invalid" : ""
            }`}
            placeholder="Message"
            aria-describedby="error-message"
            required
          ></textarea>
          {errors.message && (
            <div id="error-message" className="contact-form__error-field">
              {errors.message}
            </div>
          )}
        </div>

        {/* ---------- Status ---------- */}
        <div className="col-md-12 text-center">
          {status === "loading" && (
            <div className="contact-form__loading">Sending message...</div>
          )}
          {status === "success" && (
            <div className="contact-form__sent-message">
              ✅ Your message has been sent. Thank you!
            </div>
          )}
          {status === "error" && (
            <div className="contact-form__error-message">
              ❌ Failed to send message. Please try again.
            </div>
          )}

          <button
            type="submit"
            className="contact-form__button"
            disabled={status === "loading"}
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>
        </div>
      </div>
    </form>
  );
}

export default ContactForm;