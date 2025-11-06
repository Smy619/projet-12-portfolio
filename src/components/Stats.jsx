import React, { useEffect } from "react";
import PureCounter from "@srexi/purecounterjs";
import "../assets/styles/_stats.scss";

function Stats() {
  useEffect(() => {
    new PureCounter();
  }, []);
  
  const statsData = [
    { icon: "bi bi-emoji-smile", end: 1, label: "Happy Clients" },
    { icon: "bi bi-journal-richtext", end: 10, label: "Projects Completed" },
    { icon: "bi bi-headset", end: 630, label: "Hours Of Support" },
    { icon: "bi bi-people", end: 1, label: "Hard Workers" },
  ];
  return (
    // Stats Section
    <section id="stats" className="stats section"  aria-label="Professional statistics section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          {statsData.map((item, index) => (
            <article 
            key={index} 
            className="col-lg-3 col-md-6 d-flex flex-column align-items-center"
            role="group"
            aria-labelledby={`stat-${index}-label`}
            >
            <i className={`bi ${item.icon}`}></i>
              <div className="stats-item" role="status" aria-live="polite" aria-label={`${item.label}: ${item.end}`}>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end={item.end}
                  data-purecounter-duration="1"
                  className="purecounter"
                ></span>
                <p id={`stat-${index}-label`}>{item.label}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;
