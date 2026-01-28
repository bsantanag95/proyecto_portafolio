import { User } from "lucide-react";
import { useLanguage } from "../../hooks/useLanguage";

function Summary() {
  const { t } = useLanguage();

  return (
    <section className="max-w-5xl space-y-10 mt-20">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-linear-to-br from-blue-500/20 to-blue-600/20 flex items-center justify-center">
            <User size={18} className="text-blue-700 dark:text-blue-400" />
          </div>
          {t.about.summaryTitle}
        </h2>
        <div className="h-px w-full bg-linear-to-r from-transparent via-zinc-300 to-transparent dark:via-zinc-700" />
      </div>
      {/* Grid moderno con dos columnas en desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        {/* Columna 1: Presentación personal */}
        <div className="lg:col-span-2 space-y-8">
          {/* Bloque de presentación con fondo sutil */}
          <div className="group relative p-6 rounded-2xl bg-linear-to-br from-white/60 to-white/30 border border-zinc-200/50 hover:border-blue-300/50 transition-all duration-500 hover:shadow-lg dark:from-zinc-900/40 dark:to-zinc-800/30 dark:border-zinc-700/50 dark:hover:border-blue-500/30">
            <div className="absolute -inset-1 rounded-2xl bg-linear-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-8 w-8 rounded-lg bg-linear-to-br from-blue-500/20 to-blue-600/20 flex items-center justify-center">
                  <span className="text-blue-700 dark:text-blue-400">👋</span>
                </div>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                  {t.about.summaryIntroTitle}
                </h3>
              </div>

              <p className="text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
                {t.about.summaryIntro}
              </p>
            </div>
          </div>

          {/* Bloque de enfoque técnico */}
          <div className="group relative p-6 rounded-2xl bg-linear-to-br from-white/60 to-white/30 border border-zinc-200/50 hover:border-blue-300/50 transition-all duration-500 hover:shadow-lg dark:from-zinc-900/40 dark:to-zinc-800/30 dark:border-zinc-700/50 dark:hover:border-blue-500/30">
            <div className="absolute -inset-1 rounded-2xl bg-linear-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-8 w-8 rounded-lg bg-linear-to-br from-purple-500/20 to-purple-600/20 flex items-center justify-center">
                  <span className="text-purple-700 dark:text-purple-400">
                    💻
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                  {t.about.summaryFocusTitle}
                </h3>
              </div>

              <p className="text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
                {t.about.summaryFocus}
              </p>
            </div>
          </div>
        </div>

        {/* Columna 2: Llamada a acción / Transición */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 p-6 rounded-2xl bg-linear-to-b from-blue-50/80 to-white/60 border border-blue-200/50 shadow-sm dark:from-blue-900/10 dark:to-zinc-900/20 dark:border-blue-800/30">
            <div className="mb-6">
              <div className="h-10 w-10 rounded-xl bg-linear-to-br from-blue-500/20 to-blue-600/20 flex items-center justify-center mb-4">
                <span className="text-blue-700 dark:text-blue-400">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
                {t.about.nextSection.title}
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                {t.about.nextSection.subtitle}
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-sm font-medium text-zinc-800 dark:text-zinc-300">
                  {t.about.nextSection.items.projects}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div
                  className="h-2 w-2 rounded-full bg-blue-500 animate-pulse"
                  style={{ animationDelay: "0.2s" }}
                />
                <span className="text-sm font-medium text-zinc-800 dark:text-zinc-300">
                  {t.about.nextSection.items.experience}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div
                  className="h-2 w-2 rounded-full bg-blue-500 animate-pulse"
                  style={{ animationDelay: "0.4s" }}
                />
                <span className="text-sm font-medium text-zinc-800 dark:text-zinc-300">
                  {t.about.nextSection.items.caseStudies}
                </span>
              </div>
            </div>

            {/* Texto de transición */}
            <div className="mt-8 pt-6 border-t border-blue-200/30 dark:border-blue-800/30">
              <p className="text-base font-medium text-zinc-800 dark:text-zinc-200">
                {t.about.summaryBridge}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Summary;
