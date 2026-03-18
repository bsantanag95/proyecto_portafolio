import { Contact, GitHubCta, CvCta, Hero } from "./";
import SectionSpy from "../../components/Sidebar/SectionSpy";
import { useLanguage } from "../../hooks/useLanguage";
import { usePageTitle } from "../../hooks/usePageTitle";
import BackButton from "../../components/ui/BackButton";

function Home() {
  const { t } = useLanguage();
  usePageTitle(t.sidebar.home + " · Esteban Santana");
  return (
    <main className="space-y-12">
      <BackButton />
      <section id="hero">
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
