import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";

import Navbar from "./components/Navbar/Navbar";
import Footer2 from "./components/Footer/Footer2";
import ScrollTop from "./components/Buttons/ScrollTop"

//Pages English
import Home from "./pages/Home";
import About from "./pages/AboutPage";
import Projects from "./pages/Projects";
import Contact from "./pages/ContactPage";

// Projects
import ProjectOne from "./components/ProjectCarousel/Projects/ProjectOne";
import ProjectTwo from "./components/ProjectCarousel/Projects/ProjectTwo";
import ProjectFour from "./components/ProjectCarousel/Projects/ProjectFour";
import ProjectFive from "./components/ProjectCarousel/Projects/ProjectFive";

//Pages French
import HomeFrench from "./components/French/HomeFrench";


const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Navbar />
      <Routes>
        {/* ENGLISH */}

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />

        {/* Projects */}

        <Route path="/Retrofiting+Underpinning" element={<ProjectOne />} />
        <Route path="/Geotechnical-engineering" element={<ProjectTwo />} />
        <Route path="/Rock-Mechanics" element={<ProjectFour />} />
        <Route path="/Shoring-design" element={<ProjectFive />} />

        {/* FRANÇAIS */}

        <Route path="/accueil" element={<HomeFrench />} />
      </Routes>
      <ScrollTop />
      <Footer2 />
    </BrowserRouter>
  );
};

export default App;
