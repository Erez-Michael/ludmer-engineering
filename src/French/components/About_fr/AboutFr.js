//**********************************************//
//**************** // FRENCH // ****************//
//**********************************************//

import { AboutContent } from "../About_fr/AboutContent";
import { aboutOne, aboutTwo } from "../../data/AboutData";
import AboutHeader from "./AboutHeader";
import PageWrapper from "../../pages/PageWrapper";
import NavbarFr from "../Navbar/NavbarFr";

const AboutFr = () => {
  return (
    <PageWrapper>
      <NavbarFr/>
      <AboutHeader />
      <AboutContent {...aboutOne} />
      <AboutContent {...aboutTwo} />
    </PageWrapper>
  );
};

export default AboutFr;
