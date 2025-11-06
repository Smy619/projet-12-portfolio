import AOS from "aos";
import "aos/dist/aos.css";
import "../assets/styles/_skills.scss";
import "../assets/styles/_timeline.scss";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function SkillsAndResume() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      {/* -------- Skills Section -------- */}
      <section id="expertise" className="expertise-section section-block" aria-label="Technical skills section">
        <div className="container" data-aos="fade-up">
          <div className="block-title">
            <h2>Skills</h2>
            <p>
              Here are the main technologies and tools I use to build modern,
              efficient, and scalable web applications.
            </p>
          </div>

          <div className="row expertise-content">
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <div className="progress">
                <span className="skill">
                  HTML <i className="val">100%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    style={{ width: "100%" }}
                    aria-label="Html skill 100%"
                    role="progressbar"
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>

              <div className="progress">
                <span className="skill">
                  CSS / SCSS <i className="val">95%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    style={{ width: "95%" }}
                    aria-label="CSS skill 95%"
                    role="progressbar"
                    aria-valuenow="95"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>

              <div className="progress">
                <span className="skill">
                  JavaScript <i className="val">90%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    style={{ width: "90%" }}
                    aria-label="JavaScript skill 90%"
                    role="progressbar"
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
              <div className="progress">
                <span className="skill">
                  React.js <i className="val">85%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    style={{ width: "85%" }}
                    aria-label="React skill 85%"
                    role="progressbar"
                    aria-valuenow="85"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>

              <div className="progress">
                <span className="skill">
                  WordPress <i className="val">90%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    style={{ width: "90%" }}
                    aria-label="WordPress skill 90%"
                    role="progressbar"
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>

              <div className="progress">
                <span className="skill">
                  SEO / Performance <i className="val">85%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    style={{ width: "85%" }}
                    aria-label="SEO skill 85%"
                    role="progressbar"
                    aria-valuenow="85"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------- Resume Section -------- */}
      <section id="timeline" className="timeline-section section-block bg-soft" aria-label="Resume and experience section">
        <div className="container" data-aos="fade-up">
          <div className="block-title">
            <h2>Resume</h2>
           <p>
              My learning path and professional experience — from web
              integration to modern front-end development.
            </p>
             {/* ===== Button ===== */}
            <div className="text-center mt-5"> 
              <Link to="/cv" className="btn btn-outline-primary">
                View Cv Online
              </Link>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6" data-aos="fade-up">
              <h3 className="timeline-title">Education</h3>

              <div className="timeline-item">
                <h4>Web Integrator - OpenClassrooms</h4>
                <time dateTime="2025-02">02/2025</time> - <time dateTime="2025-11">11/2025</time>
                <p>
                  <em>Online Formation, France</em>
                </p>
                <p>
                  Completed multiple projects: responsive websites, CSS
                  animations, JavaScript interfaces, SEO, API and React
                  applications.
                </p>
              </div>

              <div className="timeline-item">
                <h4>MASTER’S DEGREE IN COMPUTER SCIENCE</h4>
                <time dateTime="2013">2013</time> - <time dateTime="2015">2015</time>
                <p>
                  <em>Paris,France</em>
                </p>
                <p>Focus: Information Technology and Software Development.</p>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
              <h3 className="timeline-title">Experience</h3>

              <div className="timeline-item">
                <h4>Web integrator</h4>
                <time dateTime="2025-02">02/2025</time> -<time dateTime="2025-11">11/2025</time>
                <p>
                  <em>OpenClassrooms</em>
                </p>
                <ul>
                  <li>
                    Built dynamic React components with reusable architecture
                    (Project P6)
                  </li>
                  <li>
                    Developed responsive front-end apps with React Router and
                    API integration (Project P7)
                  </li>
                  <li>
                    Optimized website SEO and accessibility following Lighthouse
                    & WAVE audits (Project P8)
                  </li>
                  <li>
                    Designed a secure banking dashboard with Redux Toolkit and
                    MongoDB (Project P10)
                  </li>
                </ul>
              </div>

              <div className="timeline-item">
                <h4>IT Systems Consulting</h4>
                <time dateTime="2015-04">04/2015</time>-<time dateTime="2019-09">09/2019</time>
                <p>
                  <em>Freelance / Self-employed</em>
                </p>
                <ul>
                  <li>
                    Provided IT consulting services for small and medium-sized
                    businesses, offering local technical support.
                  </li>
                  <li>
                    Implemented and maintained IT infrastructures and business
                    software solutions.
                  </li>
                  <li>
                    Diagnosed and resolved technical issues to ensure system
                    reliability and performance.
                  </li>
                  <li>
                    Optimized workstation configurations and delivered technical
                    improvement recommendations.
                  </li>
                  <li>
                    Trained users on new tools, systems, and work environments.
                  </li>
                  <li>
                    Worked independently with accountability, managing multiple
                    clients simultaneously.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SkillsAndResume;
