import React, { useEffect } from "react";
import { motion } from "framer-motion";
import SkillBar from "../components/SkillBar";
import LanguageCircle from "../components/LanguageCircle";
import AOS from "aos";
import "aos/dist/aos.css";
import "../assets/styles/_cv.scss";

function CV() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section id="cv" className="cv-page">
      <motion.div
        className="cv-container"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* ===== LEFT SIDEBAR ===== */}
        <motion.aside
          className="cv-sidebar"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="cv-photo">
            <img src="/assets/img/profile-img.webp" alt="Profile" />
          </div>

          {/* ===== CONTACT ===== */}
          <div className="section-green-1" data-aos="fade-up">
            <h3>Contact</h3>
            <ul>
              <li>
                <i className="bi bi-person"></i> French
              </li>
              <li>
                <i className="bi bi-geo-alt"></i> Vendee, French
              </li>
              <li>
                <i className="bi bi-envelope"></i> contact@solenesun.com
              </li>
              <li>
                <i className="bi bi-telephone"></i> +33 6 12 34 56 78
              </li>
              <li>
                <i className="bi bi-linkedin"></i>{" "}
                <a
                  href="https://linkedin.com/in/solenesun"
                  target="_blank"
                  rel="noreferrer"
                >
                  linkedin.com/in/solenesun
                </a>
              </li>
              <li>
                <i className="bi bi-github"></i>{" "}
                <a
                  href="https://github.com/Smy619"
                  target="_blank"
                  rel="noreferrer"
                >
                  github.com/Smy619
                </a>
              </li>
              <li>
                <i className="bi bi-laptop"></i> Remote Work
              </li>
            </ul>
          </div>

          {/* ===== LANGUAGES ===== */}
          <motion.div
            className="section-green-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3>Languages</h3>
            <div className="language-grid">
              <LanguageCircle
                name="French"
                level={70}
                color="#eaf4f1"
                delay={0.1}
              />
              <LanguageCircle
                name="English"
                level={40}
                color="#eaf4f1"
                delay={0.2}
              />
              <LanguageCircle
                name="Chinese"
                level={100}
                color="#eaf4f1"
                delay={0.3}
              />
            </div>
          </motion.div>

          {/* ===== TECHNICAL SKILLS ===== */}
          <motion.div
            className="section-green-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>Technical Skills</h3>
            <ul className="skills-list">
              {[
                { name: "HTML", level: "100%" },
                { name: "CSS / SCSS", level: "95%" },
                { name: "JavaScript", level: "90%" },
                { name: "React.js", level: "85%" },
                { name: "WordPress", level: "90%" },
                { name: "SEO / Performance", level: "85%" },
              ].map((skill, i) => (
                <motion.li
                  key={i}
                  className="skill-item"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  viewport={{ once: true }}
                >
                  {skill.name}

                  <SkillBar
                    level={skill.level}
                    color="#eaf4f1"
                    delay={i * 0.15}
                  />
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            className="section-green-4"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>Strengths</h3>
            <ul className="strength-list">
              <li>Autonomous in remote work</li>
              <li>Excellent attention to detail</li>
              <li>Strong problem-solving mindset</li>
              <li>Quality and delivery oriented</li>
            </ul>
          </motion.div>
        </motion.aside>
        {/* ===== RIGHT CONTENT ===== */}
        <motion.div
          className="cv-content"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <header className="cv-header" data-aos="fade-up">
            <h1>Ting Sun</h1>
            <h4>Front-End React Developer </h4>
            <p>Architecture & Automation</p>
            <div className="download">
              {" "}
              <a
                href="/assets/pdf/EN_CV_2025-10-31_TING_SUN.pdf"
                download
                className="cv-download"
              >
                {" "}
                <i className="bi bi-download"></i> Download my CV (PDF){" "}
              </a>{" "}
            </div>
          </header>

          <motion.section
            className="cv-about"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Profile</h2>
            <p>
              Front-end developer specialized in React, passionate about code
              architecture, workflow automation, and high-performance
              interfaces. Available for remote work.
            </p>
          </motion.section>

          <section className="cv-experience" data-aos="fade-up">
            <h2>Professional Experience</h2>

            <div className="cv-item">
              <h4>Sous-Chef</h4>
              <span className="cv-date">
                01/2022 – 09/2024 · Sushi Wu, Les Sables-d’Olonne, France
              </span>
              <ul>
                <li>Supervised food preparation and service operations</li>
                <li>
                  Coordinated kitchen staff and ensured smooth daily workflow
                </li>
                <li>
                  Applied hygiene and food safety standards according to HACCP
                  rules
                </li>
              </ul>
            </div>

            <div className="cv-item">
              <h4>Freelance IT Consultant / Web Developer</h4>
              <span className="cv-date">
                05/2015 – 09/2019 · La Roche-sur-Yon, France
              </span>
              <ul>
                <li>Designed and developed websites for local clients</li>
                <li>Provided technical support and training for users</li>
                <li>
                  Implemented modern web solutions tailored to client needs
                </li>
              </ul>
            </div>
          </section>

          <section className="cv-education" data-aos="fade-up">
            <h2>Education</h2>

            <div className="cv-item">
              <h4>Web Integrator </h4>
              <span className="cv-date">
                02/2025 – Present · OpenClassrooms, La Roche-sur-Yon
              </span>
              <p>
                Front-end: HTML, CSS, JavaScript, React <br />
                Back-end: Node.js, Express, MongoDB <br />
                Tools: Git/GitHub, Figma, API integration, Responsive design
              </p>
            </div>

            <div className="cv-item">
              <h4>Master’s Degree in Computer Science (Bac+5)</h4>
              <span className="cv-date">
                09/2014 – 09/2015 · INSTITUT Supérieur Privé des Métiers, Paris
              </span>
            </div>

            <div className="cv-item">
              <h4>Bachelor’s Degree in Computer Science (Bac+3)</h4>
              <span className="cv-date">
                09/2012 – 09/2013 · INSTITUT Supérieur Privé des Métiers, Paris
              </span>
            </div>

            <div className="cv-item">
              <h4>Bachelor’s Degree in Mathematics</h4>
              <span className="cv-date">
                09/2008 – 09/2011 · University of Le Havre, France
              </span>
            </div>
          </section>

          <section className="cv-skill-bars" data-aos="fade-up">
            <h2>Key Skills</h2>
            {[
              { name: "React / Front-End Architecture", level: "90%" },
              { name: "JavaScript / Node.js", level: "85%" },
              { name: "WordPress / SCSS Integration", level: "82%" },
              { name: "Responsive Design & Accessibility", level: "80%" },
              { name: "Git / GitHub / CI-CD", level: "78%" },
            ].map((skill, i) => (
              <div className="skill-bar" key={i}>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                >
                  {skill.name}
                </motion.p>
                <SkillBar level={skill.level} color="var(--accent-color)" delay={i * 0.2} />
              </div>
            ))}
          </section>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default CV;
