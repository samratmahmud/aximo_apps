import React from "react";
import AboutHeader from "./AboutHeader";
import SuccessRate from "../home/SuccessRate";
import MissionNVision from "./MissionNVision";
import Experiences from "../home/Experiences";
import AboutEmployes from "./AboutEmploye";
import Contract from "../../components/global/footer/Footer";

function page() {
  return (
    <main>
      <AboutHeader />
      <SuccessRate />
      <MissionNVision />
      <Experiences />
      <AboutEmployes />
      <Contract />
    </main>
  );
}

export default page;
