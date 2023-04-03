//**********************************************//
//**************** // FRENCH // ****************//
//**********************************************//

import { AboutContent } from "../About_fr/AboutContent";
import { aboutOne, aboutTwo } from "../../data/AboutData";
import AboutHeader from "./AboutHeader";
import PageWrapper from "../../pages/PageWrapper";
import NavbarFr from "../Navbar/NavbarFr";
import FooterFr from "../../../French/components/FooterFr/FooterFr";

const AboutFr = () => {
 
  return (
    <PageWrapper>
      <NavbarFr/>
      <AboutHeader />
      <AboutContent {...aboutOne} />
      <AboutContent {...aboutTwo} />
      <FooterFr />
    </PageWrapper>
  );
};

export default AboutFr;
