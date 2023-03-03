import { AboutContent } from "../About/AboutContent";
import { aboutOne, aboutTwo } from "../../data/AboutData";
import AboutHeader from "./AboutHeader";
import PageWrapper from "../../pages/PageWrapper";

const Contact = () => {
  return (
    <PageWrapper>
      <AboutHeader />
      <AboutContent {...aboutOne} />
      <AboutContent {...aboutTwo} />
    </PageWrapper>
  );
};

export default Contact;
