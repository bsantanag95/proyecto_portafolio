import { Hero, Techstack, Summary, Highlights } from "./";

function Home() {
  return (
    <section className="space-y-16 sm:space-y-20">
      <Hero />
      <Techstack />
      <Summary />
      <Highlights />
    </section>
  );
}

export default Home;
