import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";

// Scroll to top button
import ScrollTop from "./Buttons/ScrollTop";

//Pages English
import Home from "./English/pages/Home";
import AboutPage from "./English/pages/AboutPage";
import Projects from "./English/pages/ProjectsPage";
import ContactPage from "./English/pages/ContactPage";

// Projects
import ProjectOne from "./English/components/ProjectCarousel/Projects/ProjectOne";
import ProjectTwo from "./English/components/ProjectCarousel/Projects/ProjectTwo";
import ProjectThree from "./English/components/ProjectCarousel/Projects/ProjectThree";
import ProjectFour from "./English/components/ProjectCarousel/Projects/ProjectFour";

//////////////////////////////////////////////////

//Pages French
import HomePageFr from "./French/pages/HomePageFr";
import AboutPageFr from "./French/pages/AboutPageFr";
import ProjectsPageFr from "./French/components/ProjectCarousel/ProjetsFr";
import ContactPageFr from "./French/pages/ContactPageFr";

// Projects French
import { FrProjectOne } from "./French/components/ProjectCarousel/Projects/FrProjectOne";
import FrProjectTwo from "./French/components/ProjectCarousel/Projects/FrProjectTwo";
import FrProjectThree from "./French/components/ProjectCarousel/Projects/FrProjectThree.js";
import FrProjectFour from "./French/components/ProjectCarousel/Projects/FrProjectFour";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        {/* ENGLISH */}

        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* Projects */}

        <Route path="/Retrofiting+Underpinning" element={<ProjectOne />} />
        <Route path="/Geotechnical-engineering" element={<ProjectTwo />} />
        <Route path="/Rock-Mechanics" element={<ProjectThree />} />
        <Route path="/Shoring-design" element={<ProjectFour />} />

        {/* FRANÇAIS */}

        <Route path="/" element={<HomePageFr />} />
        <Route path="/a-propos" element={<AboutPageFr />} />
        <Route path="/projets" element={<ProjectsPageFr />} />
        <Route path="/contact-fr" element={<ContactPageFr />} />

        {/* Projets */}

        <Route
          path="/Transformation_de_bâtiments_et_sous-oeuvre"
          element={<FrProjectOne />}
        />
        <Route path="/Géotechnique" element={<FrProjectTwo />} />
        <Route path="/Mécanique_des_roches" element={<FrProjectThree />} />
        <Route path="/Soutènement_des_terres" element={<FrProjectFour />} />
      </Routes>
      <ScrollTop />
    </BrowserRouter>
  );
};

export default App;
