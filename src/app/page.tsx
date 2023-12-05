import Header from "./home/Header";
import SuccessRate from "./home/SuccessRate";
import Cards from "./home/Cards";
import SliderCards from "./home/SliderCards";

export default function Home() {
  return (
    <main>
      <Header />
      <Cards />
      <SuccessRate />
      <SliderCards />
    </main>
  );
}
