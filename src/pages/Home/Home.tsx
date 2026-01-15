import { Contact, Hero } from "./";
import SectionSpy from "../../components/Sidebar/SectionSpy";

function Home() {
  return (
    <main className="space-y-24">
      <section id="hero" className="pt-24">
        <Hero />
      </section>

      <section id="contact">
        <SectionSpy id="contact" />
        <Contact />
      </section>
    </main>
  );
}

export default Home;
