import { Contact, GitHubCta, CvCta, Hero } from "./";
import SectionSpy from "../../components/Sidebar/SectionSpy";

function Home() {
  return (
    <main className="space-y-24">
      <section id="hero" className="pt-24">
        <Hero />
      </section>
      <section className="grid gap-6 sm:grid-cols-2">
        <GitHubCta />
        <CvCta />
      </section>
      <section id="contact">
        <SectionSpy id="contact" />
        <Contact />
      </section>
    </main>
  );
}

export default Home;
