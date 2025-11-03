import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ContactForm from "./ContactForm";
import "../assets/styles/_contact.scss";

function Contact() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section id="contact" className="contact section">
      {/* Section Title */}
      <div className="contact__title-container block-title" data-aos="fade-up">
        <h2>Contact</h2>
        <p className="contact__subtitle">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>

      <div
        className="contact__content container"
        data-aos="fade"
        data-aos-delay="100"
      >
        <div className="row gy-4">
          {/* Left Info */}
          <div className="col-lg-4 contact__info">
            <div
              className="contact__info-item d-flex"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <i className="bi bi-geo-alt flex-shrink-0"></i>
              <div>
                <h3>Address</h3>
                <p>Vendee , France</p>
              </div>
            </div>

            <div
              className="contact__info-item d-flex"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <i className="bi bi-telephone flex-shrink-0"></i>
              <div>
                <h3>Call Us</h3>
                <p>+33 6 01 22 84 47</p>
              </div>
            </div>

            <div
              className="contact__info-item d-flex"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <i className="bi bi-envelope flex-shrink-0"></i>
              <div>
                <h3>Email Us</h3>
                <p>contact@solenesun.com</p>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="col-lg-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
