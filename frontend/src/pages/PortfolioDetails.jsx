import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "../assets/styles/_portfolio-details.scss";

function PortfolioDetails() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
    window.scrollTo(0, 0);

    // Determine the correct data source based on the environment
    // - During local development: load JSON directly from the public folder
    // - In production (deployed site): fetch JSON from GitHub raw URL
    const baseUrl =
      import.meta.env.MODE === "development"
        ? "/assets/data/portfolioData.json"
        : "https://raw.githubusercontent.com/Smy619/projet-12-portfolio/main/public/assets/data/portfolioData.json";

    fetch(`${baseUrl}?t=${Date.now()}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const found = data.find((item) => item.id === Number(id));
        setProject(found);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching portfolio data:", error);
        setLoading(false);
      });
  }, [id]);

  useEffect(() => {
    if (project) {
      document.title = `${project.title} | Solène Dev Studio`;
    }
  }, [project]);
  //  Add loading screen before rendering project details
  if (loading) {
    return (
      <section className="portfolio-details section">
        <div className="container text-center py-5">
          <h2>Loading project details...</h2>
        </div>
      </section>
    );
  }

  if (!project) {
    return (
      <section className="portfolio-details section">
        <div className="container text-center py-5">
          <h2>Project not found</h2>
          <Link to="/" className="btn btn-primary mt-3">
            Back to Home
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section id="portfolio-details" className="portfolio-details section">
      <div className="container">
        {/* Page Title */}
        <div className="page-title" data-aos="fade">
          <div className="container">
            <nav className="breadcrumbs">
              <ol>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li className="current">Portfolio Details</li>
              </ol>
            </nav>
            <h1>{project.title}</h1>
          </div>
        </div>

        {/* Details Section */}
        {project.images && project.images.length > 0 && (
          <div className="container" data-aos="fade-up">
            {/* Swiper */}
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation
              pagination={{ clickable: true }}
              loop
              autoplay={{ delay: 5000 }}
              speed={600}
              className="portfolio-details-slider"
            >
              {project.images.map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={
                      image.startsWith("http")
                        ? image
                        : `${import.meta.env.BASE_URL}${image.replace(
                            /^\//,
                            ""
                          )}`
                    }
                    alt={`${project.title}-${index}`}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
        {/* Details Content */}
        <div className="row justify-content-between gy-4 mt-4">
          {/* Left Column */}
          <div className="col-lg-8" data-aos="fade-up">
            <div className="portfolio-description">
              {/* === Project Title === */}
              <h2>{project.title}</h2>

              {/* === Short Description === */}
              <p>{project.description}</p>

              {/* === Full Narrative (Context, Objectives, Results...) === */}
              {(project.presentation ||
                project.objective ||
                project.skills ||
                project.improvements) && (
                <div className="project-presentation" data-aos="fade-up">
                  <h4>Project Overview</h4>
                  {project.presentation && <p>{project.presentation}</p>}

                  {project.objective && (
                    <p>
                      <strong>🎯 Objective:</strong> {project.objective}
                    </p>
                  )}

                  {project.skills && (
                    <p>
                      <strong>💡 Skills Developed:</strong> {project.skills}
                    </p>
                  )}

                  {project.improvements && (
                    <p>
                      <strong>🔧 Improvements:</strong> {project.improvements}
                    </p>
                  )}
                </div>
              )}

              {/* === Technologies Used === */}
              {project.tech && project.tech.length > 0 && (
                <>
                  <h4>Technologies Used</h4>
                  <ul className="tech-list">
                    {project.tech.map((tech, index) => (
                      <li key={index}>{tech}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
          {/* Right Column */}
          <div className="col-lg-3" data-aos="fade-up" data-aos-delay="100">
            <div className="portfolio-info">
              <h3>Project information</h3>
              <ul>
                <li>
                  <strong>Category:</strong>
                  {project.category}
                </li>
                <li>
                  <strong>Status:</strong> {project.status}
                </li>
                <li>
                  <strong>Year:</strong>
                  {project.year}
                </li>
                {project.url && (
                  <>
                    <li>
                      <strong>Project URL:</strong>{" "}
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {project.url.replace(/^https?:\/\//, "")}
                      </a>
                    </li>
                    <li>
                      <a
                        href={project.url}
                        className="btn-visit align-self-start"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visit Website
                      </a>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PortfolioDetails;
