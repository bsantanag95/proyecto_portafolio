import Hero from "./Hero";
import Techstack from "./Techstack";
import Summary from "./Summary";
import Highlights from "./Highlights";

function Home() {
  return (
    <section className="space-y-20">
      <Hero />
      <Techstack />
      <Summary />
      <Highlights />
    </section>
  );
}

export default Home;
