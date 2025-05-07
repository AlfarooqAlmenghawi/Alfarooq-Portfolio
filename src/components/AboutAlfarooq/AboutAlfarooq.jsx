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
          number: { value: 40 },
          size: { value: 3 },
          move: { speed: 3 },
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
    <main className="about-page-content">
      <div id="particles-js-about" className="background"></div>
      <section>
        <h1 className="about-section-title">About</h1>
        <summary>
          <p className="about-paragraph">
            Hi there! My name is Alfarooq, and I have been passionate about
            technology and intrigued by the world of software development since
            my childhood. My journey began with exploring coding basics on
            websites like W3Schools, sparking what would later become a passion
            for coding. What started as simple curiosity has evolved into a
            genuine love for solving problems and building creative solutions.
          </p>
          <p className="about-paragraph">
            Growing up, I was surrounded by software developers, including
            friends and family members, whose passion and creativity inspired
            me. Their stories made it clear to me that software development is
            the path I want to pursue.
          </p>
          <p className="about-paragraph">
            To solidify my skills and turn my passion into a profession, I
            joined Northcoders, an intensive and immersive software development
            bootcamp. The experience has been thrilling, exciting, and
            incredibly challenging, but it has only confirmed my love for
            coding. At Northcoders, I have worked on a variety of projects,
            including a full-stack solo backend project called NC News, which
            involved building APIs, database management, and implementing
            RESTful routes. These projects taught me the importance of writing
            clean, test-driven code while working under deadlines.
          </p>
          <p className="about-paragraph">
            I also had the opportunity to practice industry-standard tools and
            technologies, such as:
          </p>

          <ul className="about-list">
            <li>JavaScript (ES6+)</li>
            <li>Node.js and Express.js</li>
            <li>PostgreSQL for database management</li>React.js for building
            dynamic front-end applications
            <li>Jest and Supertest for test-driven development (TDD)</li>Netlify
            <li>Render</li>
            <li>Supabase</li>
            <li>Supabase Realtime database rendering</li>
          </ul>

          <p className="about-paragraph">
            My journey at Northcoders helped me overcome challenges like
            understanding complex backend concepts, mastering test-driven
            development, and debugging tricky code. I’ve learned to embrace a
            growth mindset, seeing every challenge as an opportunity to learn
            and improve.
          </p>
          <p className="about-paragraph">
            While coding is a major part of my life, I also have a deep
            appreciation for the broader aspects of technology and its role in
            connecting people. This perspective ties into my love for aviation,
            where technology plays a crucial role in creating seamless and
            awe-inspiring experiences. Whether it’s building scalable web
            applications or brainstorming innovative solutions, I bring the same
            sense of curiosity and enthusiasm to software development.
          </p>
          <p className="about-paragraph">
            Looking ahead, I aspire to work in the tech industry, where I can
            contribute as a developer while continuing to grow and learn. My
            ultimate goal is to combine my passion for coding with creativity,
            crafting impactful solutions that make a difference in people's
            lives.
          </p>
        </summary>
      </section>
    </main>
  );
};

export default AboutAlfarooq;
