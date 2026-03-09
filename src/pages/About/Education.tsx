import { useLanguage } from "../../hooks/useLanguage";
import AnimatedSection from "../../components/Animations/AnimatedSection";
import { Award, Calendar, GraduationCap, MapPin } from "lucide-react";

function Education() {
  const { t } = useLanguage();

  return (
    <section
      aria-label={t.about.education.title}
      className="max-w-5xl space-y-10 mt-10"
    >
      {/* Header minimalista */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold education-title flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-linear-to-br education-icon-wrapper flex items-center justify-center">
            <GraduationCap size={18} className="education-icon" />
          </div>
          {t.about.education.title}
        </h2>
        <div className="h-px w-full bg-linear-to-r education-divider" />
      </div>

      {/* Educación principal */}
      <AnimatedSection delay={0.1}>
        <article className="group relative p-6 rounded-xl border education-card transition-all duration-300 hover:shadow-md">
          {/* Barra lateral decorativa */}
          <div className="absolute left-0 top-0 h-full w-1 bg-linear-to-b education-accent-bar rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <div className="flex flex-col gap-4">
            {/* Título y periodo */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <h3 className="text-lg font-semibold education-card-title">
                {t.about.education.degree}
              </h3>
              <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full education-period-badge text-xs font-medium">
                <Calendar size={12} />
                {t.about.education.period}
              </div>
            </div>

            {/* Institución */}
            <div className="flex items-center gap-2">
              <MapPin size={14} className="education-location-icon" />
              <p className="text-base education-card-text">
                {t.about.education.institution}
              </p>
            </div>

            {/* Descripción */}
            <p className="text-base leading-relaxed education-card-text">
              {t.about.education.description}
            </p>
          </div>
        </article>
      </AnimatedSection>

      {/* Certificaciones */}
      <AnimatedSection delay={0.2}>
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Award size={20} className="certifications-icon" />
            <h3 className="text-lg font-semibold education-title">
              {t.about.education.certificationsTitle}
            </h3>
          </div>

          {/* Grid de certificaciones */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {t.about.education.certifications.map(
              (cert: string, index: number) => (
                <div
                  key={cert}
                  className="group flex items-center gap-3 p-3 rounded-lg bg-linear-to-r border certification-card transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div className="flex h-7 w-7 items-center justify-center rounded-md bg-linear-to-br certification-number text-sm font-bold">
                    {index + 1}
                  </div>
                  <span className="text-sm font-medium certification-text">
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
