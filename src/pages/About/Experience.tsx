import { useLanguage } from "../../hooks/useLanguage";
import AnimatedSection from "../../components/Animations/AnimatedSection";
import { Briefcase, Building, Calendar, Code } from "lucide-react";

function Experience() {
  const { t } = useLanguage();

  return (
    <section
      aria-label={t.about.experienceTitle}
      className="max-w-4xl space-y-12 mt-20"
    >
      {/* Header minimalista */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-linear-to-br from-blue-500/20 to-blue-600/20 flex items-center justify-center">
            <Briefcase size={18} className="text-blue-700 dark:text-blue-400" />
          </div>
          {t.about.experienceTitle}
        </h2>
        <div className="h-px w-full bg-linear-to-r from-transparent via-zinc-300 to-transparent dark:via-zinc-700" />
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          {t.about.experienceIntro}
        </p>
      </div>

      {/* Lista de experiencias */}
      <div className="space-y-6">
        {t.about.experience.map((exp, index) => (
          <AnimatedSection key={index} delay={index * 0.05}>
            <article className="group relative p-6 rounded-xl border border-zinc-200/60 bg-white/50 transition-all duration-300 hover:border-blue-300/60 hover:shadow-md dark:border-zinc-700/60 dark:bg-zinc-800/30 dark:hover:border-blue-500/40">
              {/* Barra lateral decorativa */}
              <div className="absolute left-0 top-0 h-full w-1 bg-linear-to-b from-blue-500 to-purple-500 rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="flex flex-col gap-5">
                {/* Título y periodo */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-linear-to-br from-blue-500/20 to-blue-600/20 flex items-center justify-center shrink-0">
                      <Briefcase
                        size={18}
                        className="text-blue-700 dark:text-blue-400"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Building
                          size={14}
                          className="text-zinc-500 dark:text-zinc-400"
                        />
                        <span className="text-sm text-zinc-700 dark:text-zinc-300">
                          {exp.company}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <div className="inline-flex items-center gap-1 text-sm text-zinc-500 dark:text-zinc-400">
                      <Calendar size={14} />
                      {exp.period}
                    </div>
                    <div className="px-3 py-1 rounded-full bg-blue-500/10 text-xs font-medium text-blue-700 dark:text-blue-400">
                      {exp.type}
                    </div>
                  </div>
                </div>

                {/* Descripción */}
                <p className="text-base text-zinc-700 dark:text-zinc-300">
                  {exp.description}
                </p>

                {/* Bullets */}
                <div className="space-y-2">
                  {exp.bullets.map((item: string, i: number) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                      <span className="text-sm text-zinc-700 dark:text-zinc-300 flex-1">
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
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-md bg-linear-to-r from-blue-500/10 to-blue-600/10 text-xs font-medium text-blue-700 dark:text-blue-400"
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
