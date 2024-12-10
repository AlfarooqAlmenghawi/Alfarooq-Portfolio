import "./HomePage.css";
import { TypeAnimation } from "react-type-animation";
import { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    // Set the background color when the component is mounted
    document.body.style.backgroundColor = "black";
    // Reset the background color when the component is unmounted
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <main className="home-page-content">
      <section className="section-title-sizing">
        <TypeAnimation
          className="section-title"
          sequence={[
            "Welcome to Alfarooq Almenghawi's Portfolio",
            3000,
            "",
            1000,
            "Graduated from Northcoders, aspiring to shape the tech industry",
            3000,
            "",
            1000,
            "Specializing in JavaScript, React, and backend development",
            3000,
            "",
            1000,
            "Let's build something amazing together!",
            3000,
            "",
            1000,
          ]}
          wrapper="span"
          speed={60}
          style={{}}
          repeat={Infinity}
        />
      </section>
      <p className="section-information">Lorem ipsum</p>
    </main>
  );
};

export default HomePage;
