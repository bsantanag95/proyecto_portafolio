import {
  Contact,
  Hero,
  Techstack,
  Summary,
  Highlights,
  Education,
  Experience,
} from "./";
import SectionSpy from "../../components/Sidebar/SectionSpy";

function Home() {
  return (
    <main className="space-y-24">
      <section id="hero" className="pt-24">
        <Hero />
      </section>

      <section id="tech">
        <SectionSpy id="tech" />
        <Techstack />
      </section>

      <section id="summary">
        <SectionSpy id="summary" />
        <Summary />
      </section>

      <section id="education">
        <SectionSpy id="education" />
        <Education />
      </section>

      <section id="experience">
        <SectionSpy id="experience" />
        <Experience />
      </section>

      <section id="highlights">
        <SectionSpy id="highlights" />
        <Highlights />
      </section>

      <section id="contact">
        <SectionSpy id="contact" />
        <Contact />
      </section>
    </main>
  );
}

export default Home;
