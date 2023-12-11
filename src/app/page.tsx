import Header from "./home/Header";
import SuccessRate from "./home/SuccessRate";
import Cards from "./home/Cards";
import SliderCards from "./home/SliderCards";
import FrequentlyQuestions from "./home/FrequentlyQuestions";
import Feadback from "./home/Feadback";
import Experiences from "./home/Experiences";
import Contract from "../components/global/footer/Footer";
import Employes from "./home/employe/Employes";
import Footer from "../components/global/footer/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Cards />
      <SuccessRate />
      <SliderCards />
      <FrequentlyQuestions />
      <Feadback />
      <Experiences />
      <Employes />
      <Footer />
    </main>
  );
}
