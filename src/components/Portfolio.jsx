import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.min.css";
import Isotope from "isotope-layout";
import imagesLoaded from "imagesloaded";
import "../assets/styles/_projects.scss";

function Projects() {
  const [portfolioData, setPortfolioData] = useState([]);
  const [loading, setLoading] = useState(true);

  // === Fetch portfolio data ===
  useEffect(() => {
    const url = `https://raw.githubusercontent.com/Smy619/projet-12-portfolio/main/public/assets/data/portfolioData.json`;

    fetch(url)
      .then((response) => {
        if (!response.ok) throw new Error(`Network error: ${response.status}`);
        return response.json();
      })
      .then((data) => {
        setPortfolioData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching portfolio data:", error);
        setLoading(false);
      });
  }, []);

  // === Initialize Lightbox + Isotope ===
  useEffect(() => {
    if (!portfolioData.length) return;

    // Initialize Lightbox
    const lightbox = GLightbox({
      selector: ".glightbox",
      touchNavigation: true,
      loop: true,
      keyboardNavigation: true,
      closeOnOutsideClick: true,
      openEffect: "zoom",
      closeEffect: "fade",
    });

    // FIX: only blur focus when GLightbox is open
    const handleFocusReset = () => {
      // ⚠️ NOTE:
      // This focusin listener prevents focus issues when GLightbox is open.
      // Do NOT remove the conditional check, otherwise all input fields
      // (like contact forms) will lose focus and become uneditable.

      if (document.querySelector(".glightbox-open")) {
        const active = document.activeElement;
        if (active && active.blur) active.blur();
      }
    };
    document.addEventListener("focusin", handleFocusReset);

    // === Initialize Isotope
    let isotopeInstance;
    const isotopeContainer = document.querySelector(".gallery-container");
    const filterButtons = document.querySelectorAll(".gallery-filters button");

    // Reset any inline transform styles added by Isotope
    document.querySelectorAll(".gallery-item").forEach((el) => {
      el.style.transform = "none";
    });

    imagesLoaded(isotopeContainer, () => {
      isotopeInstance = new Isotope(isotopeContainer, {
        itemSelector: ".gallery-item",
        layoutMode: "masonry",
      });
    });

    // === Filter click handler ===
    const handleFilterClick = (event) => {
      document
        .querySelector(".gallery-filters .filter-selected")
        ?.classList.remove("filter-selected");

      const target = event.currentTarget;
      target.classList.add("filter-selected");
      const filterValue = target.getAttribute("data-filter");
      isotopeInstance.arrange({ filter: filterValue });
    };

    filterButtons.forEach((btn) =>
      btn.addEventListener("click", handleFilterClick)
    );

    // === Cleanup ===
    return () => {
      document.removeEventListener("focusin", handleFocusReset);
      lightbox.destroy();
      if (isotopeInstance) isotopeInstance.destroy();
      filterButtons.forEach((btn) =>
        btn.removeEventListener("click", handleFilterClick)
      );
    };
  }, [portfolioData]);

  if (loading) return <p className="text-center">Loading projects...</p>;

  // === Render ===
  return (
    <section
      id="projects"
      className="projects-gallery section-block"
      aria-label="Portfolio projects section"
    >
      {/* Section Title */}
      <header className="container block-title" data-aos="fade-up">
        <h2>Projects</h2>
        <p>
          Explore a selection of my featured works — from professional training
          projects to personal creative experiments.
        </p>
      </header>

      <div className="container">
        <div className="gallery-layout" data-layout="masonry">
          {/* === Filter Buttons === */}
          <ul
            className="gallery-filters"
            data-aos="fade-up"
            data-aos-delay="100"
            role="tablist"
            aria-label="Project category filters"
          >
            {[
              { label: "All", filter: "*" },
              { label: "Formation", filter: ".filter-formation" },
              { label: "Personal", filter: ".filter-personal" },
              { label: "Concept", filter: ".filter-concept" },
            ].map(({ label, filter }) => (
              <li key={filter}>
                <button
                  type="button"
                  data-filter={filter}
                  className={`filter-btn ${
                    filter === "*" ? "filter-selected" : ""
                  }`}
                  aria-pressed={filter === "*"}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>

          {/* === Projects Grid === */}
          <div
            className="row gy-4 gallery-container"
            data-aos="fade-up"
            data-aos-delay="200"
            role="list"
            aria-live="polite"
          >
            {portfolioData.map((item) => (
              <article
                key={item.id}
                className={`col-lg-4 col-md-6 project-card gallery-item filter-${item.category.toLowerCase()}`}
                role="listitem"
                aria-labelledby={`proj-${item.id}-title`}
              >
                <img
                  src={item.image}
                  className="img-fluid"
                  alt={`${item.title} project preview`}
                  loading="lazy"
                />

                <div className="project-info">
                  <h3 id={`proj-${item.id}-title`}>{item.title}</h3>
                  <p>
                    {Array.isArray(item.tech)
                      ? item.tech.join(", ")
                      : item.tech}
                  </p>

                  <span
                    className={`badge ${
                      item.status === "Completed"
                        ? "bg-success"
                        : item.status === "In Progress"
                        ? "bg-warning"
                        : "bg-secondary"
                    }`}
                    aria-label={`Status: ${item.status}`}
                  >
                    {item.status}
                  </span>

                  {/* Lightbox */}
                  <a
                    href={item.image}
                    title={`Zoom ${item.title}`}
                    className="glightbox zoom-link"
                    aria-label={`Zoom image of ${item.title}`}
                  >
                    <i className="bi bi-zoom-in" aria-hidden="true"></i>
                  </a>

                  {/* Details Page Link */}
                  <Link
                    to={`/portfolio-details/${item.id}`}
                    className="details-link"
                    title="View project details"
                    aria-label={`More details about ${item.title}`}
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-link-45deg" aria-hidden="true"></i>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
