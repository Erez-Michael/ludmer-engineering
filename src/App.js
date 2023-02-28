import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";

import Navbar from "./components/Navbar/Navbar";
import Footer2 from "./components/Footer/Footer2";

//Pages English
import Home from "./pages/Home";
import About from "./pages/AboutPage";
import Projects from "./pages/ProjectsPage";
import Contact from "./pages/ContactPage";

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

        {/* FRANÇAIS */}

        <Route path="/accueil" element={<HomeFrench />} />
      </Routes>
      <Footer2 />
    </BrowserRouter>
  );
};

export default App;
