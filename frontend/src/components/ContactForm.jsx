import React, { useState } from "react";
import "../assets/styles/_contact-form.scss";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    const apiUrl = import.meta.env.VITE_API_URL;
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch(`${apiUrl}/send`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("error");
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="contact-form"
     
    >
      <div className="row gy-4">
        <div className="col-md-6">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="contact-form__input form-control"
            placeholder="Your Name"
            required
          />
        </div>

        <div className="col-md-6">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="contact-form__input form-control"
            placeholder="Your Email"
            required
          />
        </div>

        <div className="col-md-12">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="6"
            className="contact-form__textarea form-control"
            placeholder="Message"
            required
          ></textarea>
        </div>

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