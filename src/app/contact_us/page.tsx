import React from "react";
import ContactHeader from "./ContactHeader";
import ContactForm from "./ContactForm";
import Contract from "../../components/global/footer/Footer";
import ContactInformation from "./ContactInformation";
import Faqs from "./Faqs";
import Footer from "../../components/global/footer/Footer";

function page() {
  return (
    <main>
      <ContactHeader />
      <ContactForm />
      <ContactInformation />
      <Faqs />
      <Footer />
    </main>
  );
}

export default page;
