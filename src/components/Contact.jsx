import React from "react";
import ContactForm from "./ContactForm";
import "../assets/styles/_contact.scss";

function Contact() {
    return (
    <section id="contact" className="contact section">
  <div className="block-title">
    <h2>Contact</h2>
    <p>Feel free to reach out for collaborations or inquiries.</p>
  </div>

  <div className="container">
    <ContactForm />
  </div>
</section>
  );
}

export default Contact;