//**********************************************//
//**************** // FRENCH // ****************//
//**********************************************//

import { ContactContent } from "./ContactContent";
import { ContactData } from "../../data/ContactData";
import NavbarFr from "../Navbar/NavbarFr";

const ContactFr = () => {
  return (
    <>
      <NavbarFr/>
      <ContactContent {...ContactData} />
    </>
  );
};

export default ContactFr;
