import { useLanguage } from "../../hooks/useLanguage";
import AnimatedSection from "../../components/Animations/AnimatedSection";
import { Briefcase, Building, Calendar, Code } from "lucide-react";

function Experience() {
  const { t } = useLanguage();

  return (
    <section
      aria-label={t.about.experienceTitle}
      className="max-w-5xl space-y-10 mt-20"
    >
      {/* Header minimalista */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold experience-title flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-linear-to-br experience-icon-wrapper flex items-center justify-center">
            <Briefcase size={18} className="experience-icon" />
          </div>
          {t.about.experienceTitle}
        </h2>
        <div className="h-px w-full bg-linear-to-r experience-divider" />
        <p className="text-lg experience-intro">{t.about.experienceIntro}</p>
      </div>

      {/* Lista de experiencias */}
      <div className="space-y-6">
        {t.about.experience.map((exp, index) => (
          <AnimatedSection key={index} delay={index * 0.05}>
            <article className="group relative p-6 rounded-xl border experience-card transition-all duration-300  hover:shadow-md">
              {/* Barra lateral decorativa */}
              <div className="absolute left-0 top-0 h-full w-1 bg-linear-to-b experience-accent-bar rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="flex flex-col gap-5">
                {/* Título y periodo */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-linear-to-br experience-icon-wrapper flex items-center justify-center shrink-0">
                      <Briefcase size={18} className="experience-icon" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold experience-role">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Building
                          size={14}
                          className="experience-company-icon"
                        />
                        <span className="text-sm experience-company">
                          {exp.company}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <div className="inline-flex items-center gap-1 text-sm experience-date">
                      <Calendar size={14} />
                      {exp.period}
                    </div>
                    <div className="px-3 py-1 rounded-full experience-type-badge text-xs font-medium">
                      {exp.type}
                    </div>
                  </div>
                </div>

                {/* Descripción */}
                <p className="text-base experience-description">
                  {exp.description}
                </p>

                {/* Bullets */}
                <div className="space-y-2">
                  {exp.bullets.map((item: string, i: number) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full experience-bullet-dot mt-2 shrink-0" />
                      <span className="text-sm experience-bullet-text flex-1">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Stack */}
                <div className="flex flex-wrap gap-2">
                  {exp.stack.map((tech: string) => (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-md bg-linear-to-r experience-stack-badge text-xs font-medium"
                    >
                      <Code size={12} />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}

export default Experience;
