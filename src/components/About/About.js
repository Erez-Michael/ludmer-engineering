import { AboutContent } from "../About/AboutContent";
import { aboutOne, aboutTwo } from "../../data/AboutData";
import AboutHeader from "./AboutHeader";

const Contact = () => {
  return (
    <>
      <AboutHeader />
      <AboutContent {...aboutOne} />
      <AboutContent {...aboutTwo} />
    </>
  );
};

export default Contact;
