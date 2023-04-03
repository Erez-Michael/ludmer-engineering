import { ContactContent } from "../Contact/ContactContent";
import { ContactData } from "../../data/ContactData";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Contact = () => {
  return (
    <>
      <Navbar/>
      <ContactContent {...ContactData} />
      <Footer />
    </>
  );
};


export default Contact;