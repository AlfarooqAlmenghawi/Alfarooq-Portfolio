import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./AlfarooqsProjects.css";

const arrowIcon = (
  <>
    <svg
      className="arrow-icon"
      fill="currentColor"
      viewBox="0 0 7 12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 10.6L4.2 6 0 1.4 1.3 0l5.5 6-5.5 6L0 10.6z"></path>
    </svg>
  </>
);

const AlfarooqsProjects = () => {
  useEffect(() => {
    // Dynamically load the particles.js library
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";
    script.onload = () => {
      // Initialize particles.js after the script is loaded
      window.particlesJS("particles-js-projects", {
        particles: {
          number: { value: 100 },
          size: { value: 3 },
          move: { speed: 3 },
          color: { value: "#52bf89" }, // Set particle color here
          line_linked: { color: "#52bf89" }, // Link line color
        },
        interactivity: {
          events: {
            onhover: { enable: true, mode: "repulse" },
          },
        },
      });
    };
    document.body.appendChild(script);

    // Cleanup script element on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <main className="projects-page-content">
      <div id="particles-js-projects" className="background"></div>
      <section>
        <h1 className="projects-section-title">Alfarooqs Projects</h1>
        <summary>
          <section className="late-plate-section">
            <h2 className="late-plate-title">
              Late Plate - Restaurant Availability Web Application
            </h2>
            <div className="late-plate-main-content">
              <img
                className="late-plate-image"
                src="/assets/projects-backdrops/late-plate.png"
              />
              <div className="descriptions-and-links">
                <p className="late-plate-description">
                  Created as a group of 7, this is a Restaurant Availability App
                  for people who want to eat out but have missed the chance to
                  book a table in advance. It uses the user’s location to give
                  them access to the restaurants near them and make a booking
                  for a table on the same day once a restaurant catches their
                  eye. We also created a Restaurant Staff side web app where the
                  staff can create and manage restaurants, tables and bookings
                  made by customers.
                </p>
                <Link
                  className="projects-links-button"
                  to="https://www.youtube.com/watch?v=9Olc02apbR8"
                >
                  Late Plate Project Demo Video {arrowIcon}
                </Link>
                <Link
                  className="projects-links-button"
                  to="https://github.com/AlfarooqAlmenghawi/Restaurant_Staff_Website"
                >
                  GitHub Repository {arrowIcon}
                </Link>
              </div>
            </div>
          </section>
          <hr />
          <section className="nc-news-section">
            <h2 className="nc-news-title">
              Northcoders News - Online Articles Web Application
            </h2>
            <div className="nc-news-main-content">
              <img
                className="nc-news-image"
                src="/assets/projects-backdrops/nc-news.png"
              />
              <div className="descriptions-and-links">
                <p className="nc-news-description">
                  A Full-Stack application mimicking a news website, which draws
                  information from a database of users, articles, topics and
                  comments (backend), and displays them on the appropriate pages
                  for the user to see (frontend).
                </p>
                <Link
                  className="projects-links-button"
                  to="https://alfarooq-northcoders-news.netlify.app/"
                >
                  NC News Hosted App {arrowIcon}
                </Link>
                <h3>GitHub Repositories:</h3>
                <Link
                  className="projects-links-button"
                  to="https://github.com/AlfarooqAlmenghawi/fe-nc-news/"
                >
                  Frontend GitHub Repository {arrowIcon}
                </Link>
                <Link
                  className="projects-links-button"
                  to="https://github.com/AlfarooqAlmenghawi/nc-news/"
                >
                  Backend GitHub Repository {arrowIcon}
                </Link>
              </div>
            </div>
          </section>
        </summary>
      </section>
    </main>
  );
};

export default AlfarooqsProjects;
