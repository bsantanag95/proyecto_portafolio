import { useLanguage } from "../../hooks/useLanguage";
import AnimatedSection from "../../components/Animations/AnimatedSection";

function Education() {
  const { t } = useLanguage();

  return (
    <section
      aria-label={t.about.education.title}
      className="max-w-3xl space-y-10"
    >
      {/* Header */}
      <div className="space-y-2">
        <h2 className="text-xl sm:text-2xl font-semibold">
          {t.about.education.title}
        </h2>
      </div>

      {/* Education */}
      <AnimatedSection delay={0.1}>
        <article
          className="
  rounded-xl
  border border-zinc-200 dark:border-zinc-800
  bg-white dark:bg-zinc-900
  p-5
  transition
  hover:shadow-md hover:border-zinc-300
  dark:hover:border-zinc-700
"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
            <h3 className="font-medium text-zinc-900 dark:text-zinc-100">
              {t.about.education.degree}
            </h3>
            <span className="text-xs text-zinc-500">
              {t.about.education.period}
            </span>
          </div>

          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            {t.about.education.institution}
          </p>

          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            {t.about.education.description}
          </p>
        </article>
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        {/* Certifications */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium uppercase tracking-wide text-zinc-500">
            {t.about.education.certificationsTitle}
          </h3>

          <ul className="flex flex-wrap gap-2">
            {t.about.education.certifications.map((cert: string) => (
              <li
                key={cert}
                className="
                rounded-md
                bg-zinc-100 dark:bg-zinc-800
                px-3 py-1
                text-xs sm:text-sm
                text-zinc-700 dark:text-zinc-300
              "
              >
                {cert}
              </li>
            ))}
          </ul>
        </div>
      </AnimatedSection>
    </section>
  );
}

export default Education;
