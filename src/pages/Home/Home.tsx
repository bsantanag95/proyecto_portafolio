import { Contact, Hero, Techstack, Summary, Highlights } from "./";

function Home() {
  return (
    <section className="space-y-16 sm:space-y-20">
      <section id="hero">
        <Hero />
      </section>
      <section id="hero">
        <Hero />
      </section>
      <section id="hero">
        <Hero />
      </section>
      <section id="hero">
        <Hero />
      </section>
      <section id="hero">
        <Hero />
      </section>
      <section id="hero">
        <Hero />
      </section>
      <section id="tech">
        <Techstack />
      </section>
      <section id="hero">
        <Hero />
      </section>
      <section id="hero">
        <Hero />
      </section>
      <section id="hero">
        <Hero />
      </section>
      <section id="hero">
        <Hero />
      </section>
      <section id="hero">
        <Hero />
      </section>
      <section id="summary">
        <Summary />
      </section>
      <section id="hero">
        <Hero />
      </section>
      <section id="hero">
        <Hero />
      </section>
      <section id="hero">
        <Hero />
      </section>
      <section id="hero">
        <Hero />
      </section>
      <section id="hero">
        <Hero />
      </section>
      <section id="highlights">
        <Highlights />
      </section>
      <section id="hero">
        <Hero />
      </section>
      <section id="hero">
        <Hero />
      </section>
      <section id="hero">
        <Hero />
      </section>
      <section id="hero">
        <Hero />
      </section>
      <section id="hero">
        <Hero />
      </section>
      <section
        id="contact"
        aria-labelledby="contact-title"
        className="scroll-mt-24 py-24 px-4 flex justify-center"
      >
        {/* SENTINEL */}
        <span
          id="contact-spy"
          aria-hidden="true"
          className="block h-0 scroll-mt-24"
        />

        <div className="w-full max-w-2xl ...">
          <Contact />
        </div>
      </section>

      <section id="hero">
        <Hero />
      </section>
      <section id="hero">
        <Hero />
      </section>
      <section id="hero">
        <Hero />
      </section>
      <section id="hero">
        <Hero />
      </section>
      <section id="hero">
        <Hero />
      </section>
    </section>
  );
}

export default Home;
