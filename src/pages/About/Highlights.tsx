import AnimatedSection from "../../components/Animations/AnimatedSection";
import { useLanguage } from "../../hooks/useLanguage";
import {
  Star,
  Zap,
  Target,
  TrendingUp,
  CheckCircle,
  Sparkles,
  Lightbulb,
} from "lucide-react";

function Highlights() {
  const { t } = useLanguage();

  // Iconos para cada highlight
  const highlightIcons = [
    <Lightbulb className="h-5 w-5" />,
    <Zap className="h-5 w-5" />,
    <Target className="h-5 w-5" />,
    <TrendingUp className="h-5 w-5" />,
    <CheckCircle className="h-5 w-5" />,
    <Sparkles className="h-5 w-5" />,
  ];

  return (
    <section
      className="max-w-5xl space-y-10 mt-20"
      aria-label={t.about.highlightsTitle}
    >
      {/* Header estilizado */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold highlights-title theme-transition flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-linear-to-br highlights-icon-wrapper theme-transition flex items-center justify-center">
            <Star size={18} className="highlights-icon" />
          </div>

          {t.about.highlightsTitle}
        </h2>

        <div className="h-px w-full bg-linear-to-r highlights-divider theme-transition" />

        <p className="text-lg highlights-subtitle theme-transition">
          {t.about.highlightsSubtitle}
        </p>
      </div>

      {/* Grid de highlights */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {t.about.highlights.map((item: string, index: number) => (
          <AnimatedSection key={item} delay={index * 0.05}>
            <div className="group relative h-full">
              {/* Tarjeta principal */}
              <div className="h-full p-5 rounded-2xl bg-linear-to-br border highlight-card theme-transition hover:shadow-lg hover:-translate-y-0.5">
                {/* Fondo decorativo en hover */}
                <div className="absolute -inset-1 rounded-2xl bg-linear-to-r highlight-hover-bg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative">
                  {/* Icono */}
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br highlight-icon theme-transition transition-transform duration-300 group-hover:scale-110">
                    {highlightIcons[index % highlightIcons.length]}
                  </div>

                  {/* Número decorativo */}
                  <div className="absolute right-4 top-0 text-6xl font-black highlight-number theme-transition leading-none">
                    {index + 1}
                  </div>

                  {/* Texto */}
                  <p className="text-base font-medium highlight-card-text theme-transition leading-relaxed">
                    {item}
                  </p>

                  {/* Línea inferior */}
                  <div className="mt-4 h-0.5 w-8 bg-linear-to-r highlight-bottom-line theme-transition transition-all duration-500 group-hover:w-full" />
                </div>
              </div>

              {/* Glow */}
              <div className="absolute -inset-1 rounded-2xl bg-linear-to-r highlight-glow blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10" />
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}

export default Highlights;
