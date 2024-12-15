import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./AlfarooqsLinks.css";

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

const AlfarooqsLinks = () => {
  useEffect(() => {
    // Dynamically load the particles.js library
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";
    script.onload = () => {
      // Initialize particles.js after the script is loaded
      window.particlesJS("particles-js-links", {
        particles: {
          number: { value: 100 },
          size: { value: 3 },
          move: { speed: 3 },
          color: { value: "#eb34e1" }, // Set particle color here
          line_linked: { color: "#eb34e1" }, // Link line color
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
    <main className="links-page-content">
      <div id="particles-js-links" className="background"></div>
      <section>
        <h1 className="links-section-title">Alfarooqs Links</h1>
        <summary>
          <Link
            className="links-button"
            to="https://github.com/AlfarooqAlmenghawi"
          >
            <img
              src="assets/images/github.png"
              alt="Icon"
              style={{ width: "20px", height: "20px" }}
            />{" "}
            My GitHub {arrowIcon}
          </Link>
        </summary>
      </section>
    </main>
  );
};

export default AlfarooqsLinks;
