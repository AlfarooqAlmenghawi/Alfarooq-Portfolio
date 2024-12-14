import { useEffect } from "react";
import "./AlfarooqsProjects.css";

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
        <summary></summary>
      </section>
    </main>
  );
};

export default AlfarooqsProjects;
