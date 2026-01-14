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
    <section className="space-y-16 sm:space-y-20">
      <section id="hero">
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
      <section id="experience" className="scroll-mt-24">
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
    </section>
  );
}

export default Home;
