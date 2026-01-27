import AnimatedSection from "../../components/Animations/AnimatedSection";
import { useLanguage } from "../../hooks/useLanguage";
import {
  Star,
  Zap,
  Target,
  TrendingUp,
  CheckCircle,
  Sparkles,
} from "lucide-react";

function Highlights() {
  const { t } = useLanguage();

  // Iconos para cada highlight
  const highlightIcons = [
    <Star className="h-5 w-5" />,
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
        <div className="inline-flex items-center gap-3">
          <div className="h-px w-8 bg-linear-to-r from-blue-500 to-transparent" />
          <span className="text-sm font-medium uppercase tracking-wider text-blue-600 dark:text-blue-400">
            {t.about.highlightsTitle}
          </span>
        </div>
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
          {t.about.highlightsSubtitle}
        </h2>
      </div>

      {/* Grid de highlights */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {t.about.highlights.map((item: string, index: number) => (
          <AnimatedSection key={item} delay={index * 0.05}>
            <div className="group relative h-full">
              {/* Tarjeta principal */}
              <div className="h-full p-5 rounded-2xl bg-linear-to-br from-white/60 to-white/30 border border-zinc-200/50 transition-all duration-500 hover:border-blue-300/50 hover:shadow-lg hover:-translate-y-0.5 dark:from-zinc-900/40 dark:to-zinc-800/30 dark:border-zinc-700/50 dark:hover:border-blue-500/30">
                {/* Fondo decorativo en hover */}
                <div className="absolute -inset-1 rounded-2xl bg-linear-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative">
                  {/* Icono decorativo */}
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-blue-500/20 to-blue-600/20 text-blue-700 transition-transform duration-300 group-hover:scale-110 dark:text-blue-400">
                    {highlightIcons[index % highlightIcons.length]}
                  </div>

                  {/* Número decorativo */}
                  <div className="absolute right-4 top-0 text-6xl font-black text-zinc-900/5 dark:text-zinc-100/5 leading-none">
                    {index + 1}
                  </div>

                  {/* Texto del highlight */}
                  <p className="text-base font-medium text-zinc-800 dark:text-zinc-200 leading-relaxed">
                    {item}
                  </p>

                  {/* Línea decorativa inferior */}
                  <div className="mt-4 h-0.5 w-8 bg-linear-to-r from-blue-400/50 to-purple-400/50 transition-all duration-500 group-hover:w-full" />
                </div>
              </div>

              {/* Efecto de brillo en hover */}
              <div className="absolute -inset-1 rounded-2xl bg-linear-to-r from-blue-500/10 to-purple-500/10 blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10" />
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}

export default Highlights;
