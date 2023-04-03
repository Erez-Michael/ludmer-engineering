import { AboutContent } from "../About/AboutContent";
import { aboutOne, aboutTwo } from "../../data/AboutData";
import AboutHeader from "./AboutHeader";
import Navbar from "../Navbar/Navbar";
import PageWrapper from "../../pages/PageWrapper";
import Footer from "../Footer/Footer";

const About = () => {
  return (
    <PageWrapper>
      <Navbar />
      <AboutHeader />
      <AboutContent {...aboutOne} />
      <AboutContent {...aboutTwo} />
      <Footer/>
    </PageWrapper>
  );
};

export default About;
