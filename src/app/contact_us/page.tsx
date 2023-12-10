import React from "react";
import ContactHeader from "./ContactHeader";
import ContactForm from "./ContactForm";
import Contract from "../home/contact/Contract";
import ContactInformation from "./ContactInformation";

function page() {
  return (
    <main>
      <ContactHeader />
      <ContactForm />
      <ContactInformation />
      <Contract />
    </main>
  );
}

export default page;
