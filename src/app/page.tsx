import Header from "./home/Header";
import SuccessRate from "./home/SuccessRate";
import Cards from "./home/Cards";
import SliderCards from "./home/SliderCards";
import FrequentlyQuestions from "./home/FrequentlyQuestions";
import Feadback from "./home/Feadback";
import Experiences from "./home/Experiences";
import Peoples from "./home/people/Peoples";
import Contract from "./home/contact/Contract";

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
      <Peoples />
      <Contract />
    </main>
  );
}
