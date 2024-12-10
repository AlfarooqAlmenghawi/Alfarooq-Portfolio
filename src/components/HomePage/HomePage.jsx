import "./HomePage.css";
import { TypeAnimation } from "react-type-animation";

const HomePage = () => {
  return (
    <main>
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
      <p className="section-information"></p>
    </main>
  );
};

export default HomePage;
