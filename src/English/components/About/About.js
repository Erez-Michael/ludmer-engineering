import { AboutContent } from "../About/AboutContent";
import { aboutOne, aboutTwo } from "../../data/AboutData";
import AboutHeader from "./AboutHeader";
import Navbar from "../Navbar/Navbar";
import PageWrapper from "../../pages/PageWrapper";

const About = () => {
  return (
    <PageWrapper>
      <Navbar />
      <AboutHeader />
      <AboutContent {...aboutOne} />
      <AboutContent {...aboutTwo} />
    </PageWrapper>
  );
};

export default About;
