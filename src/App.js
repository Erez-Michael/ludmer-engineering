import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";

import Footer from "./French/components/Footer/Footer";
import ScrollTop from "./Buttons/ScrollTop";

//Pages English
import Home from "./English/pages/Home";
import AboutPage from "./English/pages/AboutPage";
import Projects from "./English/pages/ProjectsPage";
import ContactPage from "./English/pages/ContactPage";

// Projects
import ProjectOne from "./English/components/ProjectCarousel/Projects/ProjectOne";
import ProjectTwo from "./English/components/ProjectCarousel/Projects/ProjectTwo";
import ProjectFour from "./English/components/ProjectCarousel/Projects/ProjectFour";
import ProjectFive from "./English/components/ProjectCarousel/Projects/ProjectFive";

//////////////////////////////////////////////////

//Pages French
import HomePageFr from "./French/pages/HomePageFr";
import AboutPageFr from "./French/pages/AboutPageFr";
import ProjectsPageFr from "./French/components/ProjectCarousel/ProjetsFr";
import ContactPageFr from "./French/pages/ContactPageFr";
//Projects French
// import frProjectOne from "./French/components/ProjectCarousel/Projects/frProjectOne";
// import frProjectTwo from "./French/components/ProjectCarousel/Projects/frProjectTwo";
// import frProjectFour from "./French/components/ProjectCarousel/Projects/frProjectFour";
// import frProjectFive from "./French/components/ProjectCarousel/Projects/frProjectFive";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        {/* ENGLISH */}

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* Projects */}

        <Route path="/Retrofiting+Underpinning" element={<ProjectOne />} />
        <Route path="/Geotechnical-engineering" element={<ProjectTwo />} />
        <Route path="/Rock-Mechanics" element={<ProjectFour />} />
        <Route path="/Shoring-design" element={<ProjectFive />} />

        {/* FRANÇAIS */}

        <Route path="/accueil" element={<HomePageFr />} />
        <Route path="/a-propos" element={<AboutPageFr />} />
        <Route path="/projets" element={<ProjectsPageFr />} />
        <Route path="/contact-fr" element={<ContactPageFr />} />

        {/* Projets */}

        <Route path="/Retrofiting+Underpinning" element={<frProjectOne />} />
        <Route path="/Geotechnical-engineering" element={<frProjectTwo />} />
        <Route path="/Rock-Mechanics" element={<frProjectFour />} />
        <Route path="/Shoring-design" element={<frProjectFive />} />
      </Routes>
      <ScrollTop />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
