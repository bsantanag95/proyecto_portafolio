import { useLanguage } from "../../hooks/useLanguage";
import type { translations } from "../../i18n";
import AnimatedSection from "../../components/Animations/AnimatedSection";
import { techStack } from "../../data/techStack";
import { categoryIcons } from "../../config/techStackConfig";

function TechStack() {
  const { t } = useLanguage();
  type Translations = typeof translations.es;

  const getCategoryTitles = (t: Translations) => ({
    frontend: "Frontend",
    backend: "Backend",
    fullstack: "Fullstack",
    databases: t.about.database,
    tools: t.about.tools,
    languages: t.about.languages,
  });

  // Títulos para cada categoría
  const categoryTitles = getCategoryTitles(t);

  return (
    <section className="max-w-5xl space-y-10 mt-20">
      {/* Header minimalista */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-3">
          <div className="h-px w-8 bg-linear-to-r from-blue-500 to-transparent" />
          <span className="text-sm font-medium uppercase tracking-wider text-blue-600 dark:text-blue-400">
            Tecnologías
          </span>
        </div>

        <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
          {t.about.techStack}
        </h2>

        <p className="max-w-3xl text-lg text-zinc-600 dark:text-zinc-400">
          {t.about.techStackDescription}
        </p>
      </div>

      {/* Grid de categorías */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Object.entries(techStack).map(([category, items], index) => {
          const Icon = categoryIcons[category as keyof typeof categoryIcons];

          return (
            <AnimatedSection key={category} delay={index * 0.05}>
              <div className="group rounded-xl border border-zinc-200/60 bg-white/50 p-5 transition-all duration-300 hover:border-blue-300/60 hover:shadow-md dark:border-zinc-700/60 dark:bg-zinc-800/30 dark:hover:border-blue-500/40">
                {/* Header de categoría */}
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-blue-500/20 to-blue-600/20 text-blue-700 dark:text-blue-400">
                    <Icon className="h-4 w-4" />
                  </div>

                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                    {categoryTitles[category as keyof typeof categoryTitles]}
                  </h3>

                  <span className="ml-auto rounded-full bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
                    {items.length}
                  </span>
                </div>

                {/* Tecnologías */}
                <div className="flex flex-wrap gap-2">
                  {items.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded-lg bg-linear-to-br from-zinc-100/80 to-zinc-50/50 px-3 py-1.5 text-sm font-medium text-zinc-800 transition-all duration-300 hover:scale-105 hover:from-blue-100/80 hover:to-blue-50/50 hover:text-blue-800 dark:from-zinc-800/50 dark:to-zinc-800/30 dark:text-zinc-300 dark:hover:from-blue-900/30 dark:hover:to-blue-800/20 dark:hover:text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Línea decorativa */}
                <div className="mt-4 h-0.5 w-12 bg-linear-to-r from-blue-400/30 to-transparent transition-all duration-500 group-hover:w-24" />
              </div>
            </AnimatedSection>
          );
        })}
      </div>
    </section>
  );
}

export default TechStack;
