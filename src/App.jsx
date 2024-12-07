import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import HomePage from "./components/HomePage/HomePage.jsx";
import AboutAlfarooq from "./components/AboutAlfarooq/AboutAlfarooq.jsx";
import ContactAlfarooq from "./components/ContactAlfarooq/ContactAlfarooq.jsx";
import AlfarooqsProjects from "./components/AlfarooqsProjects/AlfarooqsProjects.jsx";
import AlfarooqsLinks from "./components/AlfarooqsLinks/AlfarooqsLinks.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-alfarooq" element={<AboutAlfarooq />} />
          <Route path="/contact-alfarooq" element={<ContactAlfarooq />} />
          <Route path="/alfarooq's-projects" element={<AlfarooqsProjects />} />
          <Route path="/alfarooq's-links" element={<AlfarooqsLinks />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
