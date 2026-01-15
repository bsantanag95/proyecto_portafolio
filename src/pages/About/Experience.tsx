import { useLanguage } from "../../hooks/useLanguage";
import AnimatedSection from "../../components/Animations/AnimatedSection";

function Experience() {
  const { t } = useLanguage();

  return (
    <section
      aria-label={t.about.experienceTitle}
      className="max-w-3xl space-y-10"
    >
      {/* Header */}
      <div className="space-y-2">
        <h2 className="text-xl sm:text-2xl font-semibold">
          {t.about.experienceTitle}
        </h2>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          {t.about.experienceIntro}
        </p>
      </div>

      {/* Experience list */}
      <div className="space-y-8">
        {t.about.experience.map((exp, index) => (
          <AnimatedSection key={index} delay={index * 0.05}>
            <article
              key={index}
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
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <h3 className="font-medium text-zinc-900 dark:text-zinc-100">
                  {exp.role} · {exp.company}
                </h3>
                <span className="text-xs text-zinc-500">
                  {exp.period} · {exp.type}
                </span>
              </div>

              {/* Description */}
              <p className="mt-3 text-sm text-zinc-700 dark:text-zinc-300">
                {exp.description}
              </p>

              {/* Bullets */}
              <ul className="mt-3 space-y-1 text-sm text-zinc-600 dark:text-zinc-400 list-disc list-inside">
                {exp.bullets.map((item: string, i: number) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              {/* Stack */}
              <div className="mt-4 flex flex-wrap gap-2">
                {exp.stack.map((tech: string) => (
                  <span
                    key={tech}
                    className="
                    rounded-md
                    bg-zinc-100 dark:bg-zinc-800
                    px-2 py-1
                    text-xs
                    text-zinc-700 dark:text-zinc-300
                  "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}

export default Experience;
