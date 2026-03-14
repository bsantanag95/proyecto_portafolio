import { useLanguage } from "../../hooks/useLanguage";
import type { translations } from "../../i18n";
import AnimatedSection from "../../components/Animations/AnimatedSection";
import { techStack } from "../../data/techStack";
import { categoryIcons } from "../../config/techStackConfig";
import { Layers } from "lucide-react";

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

  const categoryTitles = getCategoryTitles(t);

  return (
    <section className="max-w-5xl space-y-10 mt-20">
      {/* Header */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold techstack-title theme-transition flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-linear-to-br techstack-icon-wrapper theme-transition flex items-center justify-center">
            <Layers size={18} className="techstack-icon" />
          </div>

          {t.about.techStack}
        </h2>

        <div className="h-px w-full bg-linear-to-r techstack-divider theme-transition" />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Object.entries(techStack).map(([category, items], index) => {
          const Icon = categoryIcons[category as keyof typeof categoryIcons];

          return (
            <AnimatedSection key={category} delay={index * 0.05}>
              <div className="group rounded-xl border techstack-card theme-transition p-5 hover:shadow-md">
                {/* Header */}
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br techstack-icon-wrapper theme-transition techstack-icon">
                    <Icon className="h-4 w-4" />
                  </div>

                  <h3 className="text-lg font-semibold techstack-category-title theme-transition">
                    {categoryTitles[category as keyof typeof categoryTitles]}
                  </h3>

                  <span className="ml-auto rounded-full techstack-count theme-transition px-2 py-1 text-xs font-medium">
                    {items.length}
                  </span>
                </div>

                {/* Tecnologías */}
                <div className="flex flex-wrap gap-2">
                  {items.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center cursor-default rounded-lg bg-linear-to-br tech-badge theme-transition px-3 py-1.5 text-sm font-medium hover:scale-105"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Línea decorativa */}
                <div className="mt-4 h-0.5 w-12 bg-linear-to-r techstack-line theme-transition group-hover:w-24" />
              </div>
            </AnimatedSection>
          );
        })}
      </div>
    </section>
  );
}

export default TechStack;
