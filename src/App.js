import React from "react";
import GlobalStyles from "./GlobalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer2 from "./components/Footer/Footer2";

//Pages
import Home from "./pages/Home";
import About from "./pages/AboutPage";
import Projects from "./pages/ProjectsPage";
import Contact from "./pages/ContactPage";


const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer2 />
    </Router>
  );
};

export default App;
