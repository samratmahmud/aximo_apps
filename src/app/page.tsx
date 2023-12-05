import Header from "./home/Header";
import SuccessRate from "./home/SuccessRate";
import Cards from "./home/Cards";
import SliderCards from "./home/SliderCards";
import FrequentlyQuestions from "./home/FrequentlyQuestions";

export default function Home() {
  return (
    <main>
      <Header />
      <Cards />
      <SuccessRate />
      <SliderCards />
      <FrequentlyQuestions />
    </main>
  );
}
