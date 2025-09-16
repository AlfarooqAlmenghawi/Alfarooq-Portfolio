import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./AlfarooqsProjects.css";
import StackIcon from "tech-stack-icons";

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
          number: { value: 40 },
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
        {/* <h1 className="projects-section-title">Projects</h1> */}
        <h1 className="projects-section-title">Work and Experience</h1>
        <summary>
          <hr />
          <section className="late-plate-section">
            <h2 className="late-plate-title">
              Events Platform - Tech Returners Paid Contract
            </h2>
            <div className="late-plate-main-content">
              <div className="image-and-content">
                <img
                  className="late-plate-image"
                  src="/assets/projects-backdrops/events-platform.png"
                />
              </div>
              <div className="descriptions-and-links">
                <p className="late-plate-description">
                  I took part in a paid contract worth £750 with Tech Returners
                  to build an Events Platform for them. The platform allows
                  users to view and book upcoming events, manage their bookings,
                  and receive notifications about event updates. The platform
                  also includes an admin dashboard where event organizers can
                  create and manage events, view booking statistics, and
                  communicate with attendees.
                </p>
                <h3 className="links-labels">Website:</h3>
                <Link
                  className="projects-links-button"
                  to="https://alfarooq-events-platform.netlify.app/"
                  target="_blank"
                >
                  Events Platform {arrowIcon}
                </Link>
              </div>
            </div>
          </section>
          <hr />
          <section className="late-plate-section">
            <h2 className="late-plate-title">
              Life Coaching Website for PINT (People In Need Today)
            </h2>
            <div className="late-plate-main-content">
              <div className="image-and-content">
                <img
                  className="late-plate-image"
                  src="/assets/projects-backdrops/coaching.png"
                />
              </div>
              <div className="descriptions-and-links">
                <p className="late-plate-description">
                  I have been volunteering in developing and designing a life
                  coaching website for an organisation that will operate
                  alongside their current work as a homeless charity. The
                  organisation is called PINT (People In Need Today) and the
                  website is intended to provide information about the life
                  coaching services they offer, as well as resources and support
                  for individuals seeking help. The website will also include a
                  blog section where the organisation can share articles and
                  updates related to life coaching and personal development.
                </p>

                <h3 className="links-labels">GitHub Repositories:</h3>
                <Link
                  className="projects-links-button"
                  to="https://github.com/AlfarooqAlmenghawi/VIP-LIFE-COACH"
                  target="_blank"
                >
                  GitHub Repository {arrowIcon}
                </Link>
              </div>
            </div>
          </section>

          <hr />
          <section className="late-plate-section">
            <h2 className="late-plate-title">
              Late Plate - Restaurant Availability Web Application
            </h2>
            <div className="late-plate-main-content">
              <div className="image-and-content">
                <img
                  className="late-plate-image"
                  src="/assets/projects-backdrops/late-plate.png"
                />
                {/* <p className="tech-stack-label">Teck Stacks:</p>
                <div className="tech-stack-icons">
                  <StackIcon className="tech-stack-icon" name="html5" />
                  <StackIcon className="tech-stack-icon" name="tailwindcss" />
                  <StackIcon className="tech-stack-icon" name="js" />
                  <StackIcon className="tech-stack-icon" name="reactjs" />
                  <StackIcon className="tech-stack-icon" name="supabase" />
                </div> */}
              </div>
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
                <h3 className="links-labels">Related Project Links:</h3>
                <Link
                  className="projects-links-button"
                  to="https://www.youtube.com/watch?v=9Olc02apbR8"
                  target="_blank"
                >
                  Late Plate Project Demo Video {arrowIcon}
                </Link>
                <h3 className="links-labels">GitHub Repositories:</h3>
                <Link
                  className="projects-links-button"
                  to="https://github.com/AlfarooqAlmenghawi/Restaurant_Staff_Website"
                  target="_blank"
                >
                  GitHub Repository {arrowIcon}
                </Link>
              </div>
            </div>
          </section>
          <hr />
          {/* <section className="nc-news-section">
            <h2 className="nc-news-title">
              Northcoders News - Online Articles Web Application
            </h2>
            <p className="nc-news-warning">
              Note: The Hosted App and the API will delay the first request by
              50+ seconds due to the free plan of Render as it spins down with
              inactivity, so you will need to wait a bit before activating the
              API. (In some cases in prolonged inactivity the supabase database
              would have been paused so please notify me so I can restore it.)
            </p>
            <div className="nc-news-main-content">
              <div className="image-and-content">
                <img
                  className="nc-news-image"
                  src="/assets/projects-backdrops/nc-news.png"
                />
                <p className="tech-stack-label">Teck Stacks:</p>
                <div className="tech-stack-icons">
                  <StackIcon className="tech-stack-icon" name="html5" />
                  <StackIcon className="tech-stack-icon" name="css3" />
                  <StackIcon className="tech-stack-icon" name="js" />
                  <StackIcon className="tech-stack-icon" name="reactjs" />
                  <StackIcon className="tech-stack-icon" name="postgresql" />
                  <StackIcon className="tech-stack-icon" name="supabase" />
                  <StackIcon className="tech-stack-icon" name="render" />
                </div>
              </div>
              <div className="descriptions-and-links">
                <p className="nc-news-description">
                  A Full-Stack application mimicking a news website, which draws
                  information from a database of users, articles, topics and
                  comments (backend), and displays them on the appropriate pages
                  for the user to see (frontend).
                </p>
                <h3 className="links-labels">Related Project Links:</h3>
                <Link
                  className="projects-links-button"
                  to="https://alfarooq-northcoders-news.netlify.app/"
                  target="_blank">
                  NC News Hosted App {arrowIcon}
                </Link>
                <Link
                  className="projects-links-button"
                  to="https://nc-news-uocp.onrender.com/api/"
                  target="_blank">
                  API {arrowIcon}
                </Link>
                <h3 className="links-labels">GitHub Repositories:</h3>
                <Link
                  className="projects-links-button"
                  to="https://github.com/AlfarooqAlmenghawi/fe-nc-news/"
                  target="_blank">
                  Frontend GitHub Repository {arrowIcon}
                </Link>
                <Link
                  className="projects-links-button"
                  to="https://github.com/AlfarooqAlmenghawi/nc-news/"
                  target="_blank">
                  Backend GitHub Repository {arrowIcon}
                </Link>
              </div>
            </div>
          </section> */}
        </summary>
      </section>
    </main>
  );
};

export default AlfarooqsProjects;
