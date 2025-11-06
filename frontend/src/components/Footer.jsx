import "../assets/styles/_layout.scss";

function Footer() {
  return (
    <footer id="site-footer" className="site-footer" role="contentinfo">
      <div className="container text-center">
        {/* === Brand === */}
        <h3 className="footer-title">Ting Sun</h3>
        <p className="footer-text">
          Building beautiful, accessible, and performant web experiences.
        </p>

        {/* === Social Links === */}
        <nav className="footer-social-links" aria-label="Social media links">
          <a
            href="https://github.com/Smy619"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="me-3"
          >
            <i className="bi bi-github" aria-hidden="true"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/tingsun85"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="me-3"
          >
            <i className="bi bi-linkedin" aria-hidden="true"></i>
          </a>

          <a
            href="https://www.facebook.com/TingSunDev/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook Profile"
            className="me-3"
          >
            <i className="bi bi-facebook" aria-hidden="true"></i>
          </a>

          <a
            href="https://x.com/SoleneDevStudio"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter) Profile"
            className="me-3"
          >
            <i className="bi bi-twitter" aria-hidden="true"></i>
          </a>
        </nav>

        {/* === Copyright === */}
        <div className="footer-copy mt-3">
          &copy; {new Date().getFullYear()}{" "}
          <strong>
            <span>Ting Sun</span>
          </strong>{" "}
          — Rebuilt from open-source inspiration.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
