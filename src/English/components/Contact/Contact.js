import { ContactContent } from "../Contact/ContactContent";
import { ContactData } from "../../data/ContactData";
import Navbar from "../Navbar/Navbar";

const Contact = () => {
  return (
    <>
      <Navbar/>
      <ContactContent {...ContactData} />
    </>
  );
};


export default Contact;