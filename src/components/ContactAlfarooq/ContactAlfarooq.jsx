import { useEffect } from "react";
import "./ContactAlfarooq.css";

const ContactAlfarooq = () => {
  useEffect(() => {
    // Dynamically load the particles.js library
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";
    script.onload = () => {
      // Initialize particles.js after the script is loaded
      window.particlesJS("particles-js-contact", {
        particles: {
          number: { value: 40 },
          size: { value: 3 },
          move: { speed: 3 },
          color: { value: "#C9CB06" }, // Set particle color here
          line_linked: { color: "#C9CB06" }, // Link line color
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
    <main className="contact-page-content">
      <div id="particles-js-contact" className="background"></div>
      <section>
        <h1 className="contact-section-title">Contact</h1>
        <summary>
          <p className="cridentials-information">
            If you would like to reach out to provide a job opportunity or talk
            about my work and experience I have provided the means to contact me
            below and I am also contactable on <i>WhatsApp</i> on the same
            number.
          </p>
          <p className="cridentials">
            <b>Email:</b> a.almenghawi123@gmail.com
          </p>
          <p className="cridentials">
            <b>Phone Number:</b> 07869 417307
          </p>
        </summary>
      </section>
    </main>
  );
};

export default ContactAlfarooq;
