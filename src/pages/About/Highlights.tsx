import AnimatedSection from "../../components/Animations/AnimatedSection";
import { useLanguage } from "../../hooks/useLanguage";

function Highlights() {
  const { t } = useLanguage();

  return (
    <section className="max-w-3xl space-y-4">
      <h2 className="text-xl sm:text-2xl font-semibold">
        {t.about.highlightsTitle}
      </h2>
      <ul
        className="
          grid grid-cols-1 sm:grid-cols-2
          gap-3 sm:gap-4
        "
      >
        {t.about.highlights.map((item: string) => (
          <AnimatedSection key={item} delay={0.1}>
            <li
              key={item}
              className="
              flex items-start gap-2
              text-sm sm:text-base
              text-zinc-700 dark:text-zinc-300
            "
            >
              <span
                aria-hidden
                className="mt-0.5 text-zinc-900 dark:text-zinc-100"
              >
                •
              </span>
              <span>{item}</span>
            </li>
          </AnimatedSection>
        ))}
      </ul>
    </section>
  );
}

export default Highlights;
