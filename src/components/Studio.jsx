import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../assets/styles/_studio.scss";

function Studio() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const baseUrl =
      import.meta.env.MODE === "development"
        ? "/assets/data/studioServices.json"
        : "https://raw.githubusercontent.com/Smy619/projet-12-portfolio/main/public/assets/data/studioServices.json";

    fetch(`${baseUrl}?t=${Date.now()}`)
      .then((res) => {
        if (!res.ok) throw new Error(`Network error: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setServices(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching studio services:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading services...</p>;

  return (
    <section
      id="studio"
      className="studio section"
      aria-label="Digital studio services section"
    >
      <div className="container" data-aos="fade-up">
        {/* ===== Title ===== */}
        <div className="block-title text-center">
          <h2>Solene Dev Studio</h2>
          <p>
            Building digital experiences with clarity, creativity, and code.
          </p>
        </div>

        {/* ===== Button ===== */}
        <div className="text-center mt-5">
          <Link to="/studio-details" className="btn btn-outline-primary">
            Discover Full Studio →
          </Link>
        </div>

        {/* ===== Grid ===== */}
        <div className="studio-grid">
          {services.map((service, index) => (
            <article
              key={index}
              className={`studio-item ${service.className}`}
              role="group"
              aria-labelledby={`service-${index}-title`}
              data-aos="zoom-in"
              data-aos-delay={100 * (index + 1)}
            >
              <div className="icon">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <path d="M50 0L100 25V75L50 100L0 75V25Z" />
                </svg>
                <i className={service.icon} aria-hidden="true"></i>
              </div>
              <h4 id={`service-${index}-title`}>{service.title}</h4>
              <p>{service.description}</p>
              {service.link && (
                <Link to={service.link} className="learn-more">
                  Learn more <i className="bi bi-arrow-right"></i>
                </Link>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Studio;
