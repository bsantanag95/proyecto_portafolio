import { useLanguage } from "../../hooks/useLanguage";
import AnimatedSection from "../../components/Animations/AnimatedSection";
import { Award, Calendar, GraduationCap, MapPin } from "lucide-react";

function Education() {
  const { t } = useLanguage();

  return (
    <section
      aria-label={t.about.education.title}
      className="max-w-4xl space-y-10 mt-10"
    >
      {/* Header minimalista */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-linear-to-br from-blue-500/20 to-blue-600/20 flex items-center justify-center">
            <GraduationCap
              size={18}
              className="text-blue-700 dark:text-blue-400"
            />
          </div>
          {t.about.education.title}
        </h2>
        <div className="h-px w-full bg-linear-to-r from-transparent via-zinc-300 to-transparent dark:via-zinc-700" />
      </div>

      {/* Educación principal */}
      <AnimatedSection delay={0.1}>
        <article className="group relative p-6 rounded-xl border border-zinc-200/60 bg-white/50 transition-all duration-300 hover:border-blue-300/60 hover:shadow-md dark:border-zinc-700/60 dark:bg-zinc-800/30 dark:hover:border-blue-500/40">
          {/* Barra lateral decorativa */}
          <div className="absolute left-0 top-0 h-full w-1 bg-linear-to-b from-blue-500 to-purple-500 rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <div className="flex flex-col gap-4">
            {/* Título y periodo */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                {t.about.education.degree}
              </h3>
              <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-500/10 text-xs font-medium text-blue-700 dark:text-blue-400">
                <Calendar size={12} />
                {t.about.education.period}
              </div>
            </div>

            {/* Institución */}
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-zinc-500 dark:text-zinc-400" />
              <p className="text-base text-zinc-700 dark:text-zinc-300">
                {t.about.education.institution}
              </p>
            </div>

            {/* Descripción */}
            <p className="text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
              {t.about.education.description}
            </p>
          </div>
        </article>
      </AnimatedSection>

      {/* Certificaciones */}
      <AnimatedSection delay={0.2}>
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Award size={20} className="text-purple-600 dark:text-purple-400" />
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
              {t.about.education.certificationsTitle}
            </h3>
          </div>

          {/* Grid de certificaciones */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {t.about.education.certifications.map(
              (cert: string, index: number) => (
                <div
                  key={cert}
                  className="group flex items-center gap-3 p-3 rounded-lg bg-linear-to-r from-white/50 to-white/30 border border-zinc-200/50 hover:border-blue-300/50 transition-all duration-300 hover:-translate-y-0.5 dark:from-zinc-800/40 dark:to-zinc-800/20 dark:border-zinc-700/50 dark:hover:border-blue-500/30"
                >
                  <div className="flex h-7 w-7 items-center justify-center rounded-md bg-linear-to-br from-blue-500/20 to-blue-600/20 text-sm font-bold text-blue-700 dark:text-blue-400">
                    {index + 1}
                  </div>
                  <span className="text-sm font-medium text-zinc-800 dark:text-zinc-300">
                    {cert}
                  </span>
                </div>
              ),
            )}
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}

export default Education;
