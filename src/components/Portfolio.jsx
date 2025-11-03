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

  // Fetch portfolio data from external JSON file
  useEffect(() => {
    const url = `https://raw.githubusercontent.com/Smy619/projet-12-portfolio/main/public/assets/data/portfolioData.json`;
    
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }
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

  // Initialize GLightbox one time
  useEffect(() => {
    if (!portfolioData.length) return;
    setTimeout(() => {
   
      if (document.activeElement && document.activeElement.blur) {
        document.activeElement.blur();
      }
    }, 100);

    
    const lightbox = GLightbox({
      selector: ".glightbox",
      touchNavigation: true,
      loop: true,
      keyboardNavigation: true,
      autofocusVideos: false,
      closeOnOutsideClick: true, //
      openEffect: "zoom",
      closeEffect: "fade",
      moreText: "",
      onOpen: () => {
        setTimeout(() => {
          if (document.activeElement && document.activeElement.blur) {
            document.activeElement.blur();
          }
        }, 50);
      },
    });

    const handleFocusReset = () => {
      const active = document.activeElement;
      if (active && active.blur) active.blur();
    };

    document.addEventListener("focusin", handleFocusReset);

    // Initialize Isotope and filtering
    let isotopeInstance;
    const isotopeContainer = document.querySelector(".gallery-container");
    const filterButtons = document.querySelectorAll(".gallery-filters li");

    imagesLoaded(isotopeContainer, () => {
      isotopeInstance = new Isotope(isotopeContainer, {
        itemSelector: ".gallery-item",
        layoutMode: "masonry",
      });
      isotopeInstance.arrange({ transitionDuration: "0.4s" });
    });

    // Filter button click
    const handleFilterClick = function (event) {
      document
        .querySelector(".gallery-filters .filter-selected")
        ?.classList.remove("filter-selected");

      const target = event.currentTarget;
      target.classList.add("filter-selected");

      const filterValue = target.getAttribute("data-filter");
      isotopeInstance.arrange({ filter: filterValue });
    };

    filterButtons.forEach((button) => {
      button.addEventListener("click", handleFilterClick);
    });

    return () => {
      document.removeEventListener("focusin", handleFocusReset);
      lightbox.destroy();
      filterButtons.forEach((button) => {
        button.removeEventListener("click", handleFilterClick);
      });
      if (isotopeInstance) isotopeInstance.destroy();
    };
  }, [portfolioData]);

  if (loading) return <p>Loading projects...</p>;

  // Render Projects Section
  return (
    <section id="projects" className="projects-gallery section-block">
      {/* Section Title */}
      <div className="container block-title" data-aos="fade-up">
        <h2>Projects</h2>
        <p>
          Explore a selection of my featured works — from professional training
          projects to personal creative experiments.
        </p>
      </div>

      <div className="container">
        <div
          className="gallery-layout"
          data-default-filter="*"
          data-layout="masonry"
          data-sort="original-order"
        >
          {/* Filter Buttons */}
          <ul
            className="gallery-filters"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <li data-filter="*" className="filter-selected">
              All
            </li>
            <li data-filter=".filter-formation">Formation</li>
            <li data-filter=".filter-personal">Personal</li>
            <li data-filter=".filter-concept">Concept</li>
          </ul>

          {/* -------------------- Projects Grid ----------------- */}
          <div
            className="row gy-4 gallery-container"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {portfolioData.length === 0 ? (
              <p className="text-center text-muted">Loading projects...</p>
            ) : (
              portfolioData.map((item) => (
                <div
                  key={item.id}
                  className={`col-lg-4 col-md-6 project-card gallery-item filter-${item.category.toLowerCase()}`}
                >
                  <img
                    src={item.image}
                    className="img-fluid"
                    alt={item.title}
                  />
                  <div className="project-info">
                    <h4>{item.title}</h4>
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
                    >
                      {item.status}
                    </span>

                    {/* Lightbox Zoom */}
                    <a
                      href={item.image}
                      title={item.title}
                      className="glightbox zoom-link"
                    >
                      <i className="bi bi-zoom-in"></i>
                    </a>

                    {/* Details Link */}
                    <Link
                      to={`/portfolio-details/${item.id}`}
                      className="details-link"
                      title="More Details"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-link-45deg"></i>
                    </Link>
                  </div>
                </div>
              ))
            )}
          </div>
          {/* End Projects Grid */}
        </div>
      </div>
    </section>
  );
}

export default Projects;
