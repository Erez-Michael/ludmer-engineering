import { ContactContent } from "../Contact/ContactContent";
import { ContactData } from "../../data/ContactData";

const Contact = () => {
  return (
    <>
      <ContactContent {...ContactData} />
    </>
  );
};


export default Contact;