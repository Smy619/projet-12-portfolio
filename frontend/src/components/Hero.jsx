import { useEffect, useRef } from "react";
import Typed from "typed.js";
import AOS from 'aos';


import 'aos/dist/aos.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles/_hero.scss";

function Hero() {
  const typedElement = useRef(null);
 

  const heroImg = "/assets/img/hero-bg.webp";

  const socialLinks = [
  { href: "https://github.com/Smy619", icon: "bi-github", label: "GitHub"},
  { href: "https://www.linkedin.com/in/tingsun85", icon: "bi-linkedin", label: "LinkedIn" },
  { href: "https://www.facebook.com/TingSunDev/", icon: "bi-facebook" , label: "Facebook"},
  { href: "https://x.com/SoleneDevStudio", icon: "bi-twitter", label: "X (Twitter)"},
  { href: "mailto:contact@solenesun.com", icon: "bi-envelope", label: "Email" },
];

  useEffect(() => {
    // Initialize Typed.js
    const typed = new Typed(typedElement.current, {
      strings: ["Web Developer", "Front-end React", "Freelancer"],
      typeSpeed: 70,
      backSpeed: 40,
      backDelay: 2000,
      loop: true,
    });

  

    AOS.init({
      duration: 1000, once: true
    })
    return () => typed.destroy();
  }, []);
     
  return (
    <section id="hero" className="hero" aria-label="Introduction section">
      <img src={heroImg} alt="" data-aos="fade-in" loading="lazy" aria-hidden="true" />
      

       <div className="container" data-aos="fade-up" data-aos-delay="100">
          <h1 className="mb-2">TING SUN</h1>
          <p>
            I'm a <span ref={typedElement} aria-live="polite"></span>
          </p>
          <div className="social-links mt-3" aria-label="Social media links">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="me-3"
                aria-label={link.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className={`bi ${link.icon}`} aria-hidden="true"></i>
                <span className="sr-only">{link.label}</span>
              </a>
            ))}
         </div>
        </div>
    </section>
  );
}

export default Hero;