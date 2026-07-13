import AnimatedSection from "../../components/Animations/AnimatedSection";
import { useLanguage } from "../../hooks/useLanguage";
import { Star } from "lucide-react";

// Tags por índice — podés moverlos a tu archivo de traducciones si querés i18n
const HIGHLIGHT_TAGS = [
  "código",
  "diseño",
  "aprendizaje",
  "mejora continua",
  "responsabilidad",
  "colaboración",
];

const HIGHLIGHT_TAGS_EN = [
  "code",
  "design",
  "learning",
  "continuous improvement",
  "responsibility",
  "collaboration",
];

// Determina si la card ocupa 2 columnas (índices 0 y 4)
function isWide(index: number) {
  return index === 0 || index === 4;
}

function Highlights() {
  const { t, language } = useLanguage();

  const tags = language === "en" ? HIGHLIGHT_TAGS_EN : HIGHLIGHT_TAGS;

  return (
    <section
      className="max-w-5xl space-y-8 mt-20"
      aria-label={t.about.highlightsTitle}
    >
      {/* Header */}
      <div className="space-y-3">
        <p className="text-xs font-medium tracking-widest uppercase highlights-subtitle theme-transition">
          {t.about.highlightsSubtitle}
        </p>

        <h2 className="text-2xl font-bold highlights-title theme-transition flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-linear-to-br highlights-icon-wrapper theme-transition flex items-center justify-center">
            <Star size={16} className="highlights-icon" />
          </div>
          {t.about.highlightsTitle}
        </h2>
      </div>

      {/* Bento grid */}
      <div
        className="grid gap-2.5"
        style={{
          gridTemplateColumns: "repeat(3, 1fr)",
        }}
      >
        {t.about.highlights.map((item: string, index: number) => (
          <AnimatedSection key={item} delay={index * 0.05}>
            <div
              className="relative overflow-hidden rounded-xl border highlight-card theme-transition p-6 h-full"
              style={{
                gridColumn: isWide(index) ? "span 2" : "span 1",
              }}
            >
              {/* Dot pattern decorativo — solo primera card */}
              {index === 0 && (
                <svg
                  className="absolute top-0 right-0 opacity-20 pointer-events-none"
                  width="88"
                  height="88"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern
                      id="dots"
                      x="0"
                      y="0"
                      width="8"
                      height="8"
                      patternUnits="userSpaceOnUse"
                    >
                      <circle
                        cx="1.5"
                        cy="1.5"
                        r="1.2"
                        className="fill-current highlights-dot"
                      />
                    </pattern>
                  </defs>
                  <rect width="88" height="88" fill="url(#dots)" />
                </svg>
              )}

              {/* Tag */}
              <span className="inline-block mb-3 px-2.5 py-0.5 rounded-full text-xs border highlight-tag theme-transition">
                {tags[index] ?? ""}
              </span>

              {/* Texto */}
              <p className="text-sm font-medium leading-relaxed highlight-card-text theme-transition relative z-10">
                {item}
              </p>

              {/* Número tipográfico de fondo */}
              <span
                className="absolute bottom-0 right-3 text-7xl font-bold leading-none select-none pointer-events-none highlight-number theme-transition"
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}

export default Highlights;
