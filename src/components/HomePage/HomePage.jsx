import "./HomePage.css";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
import { useEffect } from "react";

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

const HomePage = () => {
  useEffect(() => {
    // Dynamically load the particles.js library
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";
    script.onload = () => {
      // Initialize particles.js after the script is loaded
      window.particlesJS("particles-js", {
        particles: {
          number: { value: 40 },
          size: { value: 3 },
          move: { speed: 3 },
          color: { value: ["#ff0040"] },
          // Set particle color here
          line_linked: { color: "#ff0040" }, // Link line color
        },
        interactivity: {
          events: {
            onhover: {
              enable: true, // Ensure hover is enabled
              mode: "repulse", // Choose the desired interaction mode
            },
          },
          modes: {
            repulse: {
              distance: 100, // Distance at which particles repulse
              duration: 0.4, // Duration of the effect
            },
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
    <main className="home-page-content">
      <div id="particles-js" className="background"></div>
      <section className="section-title-sizing">
        <TypeAnimation
          className="section-title"
          sequence={["Welcome to Alfarooq's Portfolio", 3000, ""]}
          wrapper="span"
          speed={60}
          style={{}}
          repeat={Infinity}
        />
      </section>
      <summary className="home-summary">
        <p className="section-information">Find my work here:</p>
        <Link
          className="about-button"
          to="/alfarooq's-projects"
          data-text="Projects and Examples of my Work"
        >
          Projects and Examples of my Work {arrowIcon}
        </Link>
      </summary>
    </main>
  );
};

export default HomePage;
