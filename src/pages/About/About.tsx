import { Education, Experience, Highlights, Summary, Techstack } from "./";
import SectionSpy from "../../components/Sidebar/SectionSpy";
import { useLanguage } from "../../hooks/useLanguage";

function About() {
  const { t } = useLanguage();
  return (
    <main className="pt-16 md:pt-20 space-y-12">
      <header className="max-w-6xl">
        <div className="inline-flex items-center gap-3 mb-6">
          <div className="h-px w-8 bg-linear-to-r from-blue-500 to-transparent" />
          <span className="text-sm font-medium uppercase tracking-wider text-blue-600 dark:text-blue-400">
            {t.about.introduction}
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          {t.about.title}
        </h1>
      </header>
      <section id="summary" className="mt-2">
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
