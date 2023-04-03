//**********************************************//
//**************** // FRENCH // ****************//
//**********************************************//

import { ContactContent } from "./ContactContent";
import { ContactData } from "../../data/ContactData";
import NavbarFr from "../Navbar/NavbarFr";
import FooterFr from "../../../French/components/FooterFr/FooterFr";

const ContactFr = () => {
  return (
    <>
      <NavbarFr/>
      <ContactContent {...ContactData} />
      <FooterFr />
    </>
  );
};

export default ContactFr;
