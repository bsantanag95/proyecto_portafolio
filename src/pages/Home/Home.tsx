import { Hero, Techstack, Summary, Highlights } from "./";

function Home() {
  return (
    <section className="space-y-16 sm:space-y-20">
      <section id="hero">
        <Hero />
      </section>
      <section id="tech">
        <Techstack />
      </section>
      <section id="summary">
        <Summary />
      </section>
      <section id="highlights">
        <Highlights />
      </section>
    </section>
  );
}

export default Home;
