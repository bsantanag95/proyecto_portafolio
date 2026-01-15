import { Education, Experience, Highlights, Summary, Techstack } from "./";
import SectionSpy from "../../components/Sidebar/SectionSpy";

function About() {
  return (
    <main className="space-y-24">
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

      <section id="tech">
        <SectionSpy id="tech" />
        <Techstack />
      </section>
    </main>
  );
}

export default About;
