import React, { useState, useEffect } from "react";
import "../assets/styles/_layout.scss";

function ScrollTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <button
      id="scroll-top"
      className={`scroll-top d-flex align-items-center justify-content-center ${
        isVisible ? "active" : ""
      }`}
      onClick={scrollToTop}
      aria-label="Scroll back to top"
    >
      <i className="bi bi-arrow-up-short" aria-hidden="true"></i>
    </button>
  );
}

export default ScrollTop;
