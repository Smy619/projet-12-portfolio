import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../assets/styles/_studio-details.scss";

function StudioDetails() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    const baseUrl =
      import.meta.env.MODE === "development"
        ? "/assets/data/studioServices.json"
        : "https://raw.githubusercontent.com/Smy619/projet-12-portfolio/main/public/assets/data/studioServices.json";

    fetch(`${baseUrl}?t=${Date.now()}`)
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading studio services:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center">Loading services...</p>;

  return (
 
    <section id="studio-details" className="studio-details section">
      <div className="container">
        <div className="page-title" data-aos="fade">
          <div className="container">
            <nav className="breadcrumbs">
              <ol>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li className="current">Solene Dev Studio</li>
              </ol>
            </nav>

            <h2>Solene Dev Studio</h2>
            <p className="subtitle">
              Discover the full range of creative and technical services
              designed to bring your ideas to life.
            </p>
          </div>
        </div>
        <div className="studio-layout">
          {/* ---------- left column ---------- */}
          <aside className="sidebar">
            <h4>Services List</h4>
            <ul>
              {services.map((service) => (
                <li key={service.id}>
                  <i className={service.icon}></i> {service.title}
                </li>
              ))}
            </ul>

            <div className="download-catalog mt-4">
              <a href="#">
                <i className="bi bi-file-earmark-pdf"></i> Catalog PDF
              </a>
              <a href="#">
                <i className="bi bi-file-earmark-text"></i> Catalog DOC
              </a>
            </div>

            <div className="help-box mt-4">
              <i className="bi bi-headset help-icon"></i>
              <h4>Have a Question?</h4>
              <p>
                <a href="mailto:contact@solenesun.com">contact@solenesun.com</a>
              </p>
            </div>
          </aside>

          {/* ---------- right column ---------- */}
          <div className="services-content">
            {services.map((service) => (
              <div key={service.id} className="service-box" data-aos="fade-up">
                <div className="services-img">
                  <img
                    src={
                      service.image ||
                      "https://placehold.co/800x450?text=" +
                        encodeURIComponent(service.title)
                    }
                    alt={service.title}
                  />
                </div>

                <h3>{service.title}</h3>
                <p>{service.description}</p>

                <ul>
                  <li>
                    <i className="bi bi-check-circle"></i> Fast & responsive
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i> SEO optimized
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i> Built with
                    scalability in mind
                  </li>
                </ul>

                <div className="pricing-cta">
                  {service.price ? (
                    <>
                      <h4>Starting from</h4>
                      <p className="price">€{service.price}</p>
                    </>
                  ) : (
                    <h4>Custom quoto available upon request</h4>
                  )}
                  <a href="#contact" className="btn btn-primary mt-2">
                    Request this service
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default StudioDetails;
