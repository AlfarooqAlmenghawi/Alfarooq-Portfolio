import { useEffect } from "react";
import "./AboutAlfarooq.css";

const AboutAlfarooq = () => {
  useEffect(() => {
    // Dynamically load the particles.js library
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";
    script.onload = () => {
      // Initialize particles.js after the script is loaded
      window.particlesJS("particles-js-about", {
        particles: {
          number: { value: 50 },
          size: { value: 3 },
          move: { speed: 2 },
          color: { value: "#000000" }, // Set particle color here
          line_linked: { color: "#000000" }, // Link line color
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
    <summary>
      <div id="particles-js-about" className="background"></div>
      <p>About Alfarooq</p>
    </summary>
  );
};

export default AboutAlfarooq;
