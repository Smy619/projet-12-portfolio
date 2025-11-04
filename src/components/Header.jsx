import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../assets/styles/_layout.scss";

function Header() {
  const [active, setActive] = useState("#hero");
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // ---- Listen to scroll event and update active section ----
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let current = "#hero";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
          current = "#" + section.getAttribute("id");
        }
      });
      setActive(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ---- Close the mobile menu when clicking outside ----
  useEffect(() => {
    const handleClickOutside = (e) => {
      const insideHeader = e.target.closest(".site-header");
      const onToggle = e.target.closest(".nav-toggle");
      if (!insideHeader && !onToggle && showMenu) {
        setShowMenu(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [showMenu]);

  // ---- Navigation items (main sections) ----
  const navItems = [
    { href: "#hero", label: "Home", icon: "bi-house" },
    { href: "#profile", label: "About", icon: "bi-person" },
    { href: "#stats", label: "Stats", icon: "bi-graph-up-arrow" },
    { href: "#expertise", label: "Skills", icon: "bi-cpu" },
    { href: "#timeline", label: "Resume", icon: "bi-briefcase" },
    { href: "#projects", label: "Portfolio", icon: "bi-grid" },
    { href: "#contact", label: "Contact", icon: "bi-envelope" },
  ];

  // ---- Other pages (separate routes) ----
  const otherPages = [
    { path: "/cv", label: "CV", icon: "bi-file-earmark-text" },
    { path: "/studio-details", label: "UnderConstruction", icon: "bi-laptop" },
  ];

  // ---- Smooth scroll to target section ----
  const scrollToSection = (hash) => {
    const el = document.querySelector(hash);
    if (!el) return;
    const offset = 80;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  // ---- Handle navigation clicks ----
  const handleNavClick = (e, href) => {
    e.preventDefault();
    setActive(href);
    setShowMenu(false);

    if (location.pathname === "/") {
      // If already on the homepage, just scroll
      scrollToSection(href);
    } else {
      // If on another page, navigate to home first, then scroll
      navigate("/");
      setTimeout(() => scrollToSection(href), 300);
    }
  };

  return (
    <>
      {/* Mobile menu toggle icon */}
      <i
        className="bi bi-list nav-toggle d-xl-none"
        onClick={() => setShowMenu((prev) => !prev)}
      ></i>

      {/* Main navigation header */}
      <header
        id="site-header"
        className={`site-header d-flex flex-column justify-content-center ${
          showMenu ? "nav-show" : ""
        }`}
      >
        <nav id="main-nav" className="main-nav">
          <ul>
            {/* Internal page sections (Home page navigation) */}
            {navItems.map(({ href, icon, label }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={(e) => handleNavClick(e, href)}
                  className={`nav-link scrollto ${
                    active === href ? "active" : ""
                  }`}
                >
                  <i className={`bi ${icon}`}></i>
                  <span>{label}</span>
                </a>
              </li>
            ))}

            {/* External pages (separate routes) */}
            {otherPages.map(({ path, icon, label }) => (
              <li key={path}>
                <Link
                  to={path}
                  className={`nav-link ${
                    location.pathname === path ? "active" : ""
                  }`}
                  onClick={() => setShowMenu(false)}
                >
                  <i className={`bi ${icon}`}></i>
                  <span>{label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
