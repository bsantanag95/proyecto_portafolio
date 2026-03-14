import { User } from "lucide-react";
import { useLanguage } from "../../hooks/useLanguage";

function Summary() {
  const { t } = useLanguage();

  return (
    <section className="max-w-5xl space-y-10 mt-20">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold theme-transition summary-section-title flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-linear-to-br summary-section-icon-bg theme-transition flex items-center justify-center">
            <User size={18} className="summary-section-icon" />
          </div>
          {t.about.summaryTitle}
        </h2>

        <div className="h-px w-full bg-linear-to-r summary-divider theme-transition" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        <div className="lg:col-span-2 space-y-8">
          {/* Card 1 */}
          <div className="group relative p-6 rounded-2xl bg-linear-to-br border summary-card theme-transition hover:shadow-lg">
            <div className="absolute -inset-1 rounded-2xl bg-linear-to-r summary-card-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-8 w-8 rounded-lg bg-linear-to-br summary-section-icon-bg theme-transition flex items-center justify-center">
                  <span className="summary-section-icon">👋</span>
                </div>

                <h3 className="text-lg font-semibold summary-card-title theme-transition">
                  {t.about.summaryIntroTitle}
                </h3>
              </div>

              <p className="text-base leading-relaxed summary-card-text theme-transition">
                {t.about.summaryIntro}
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative p-6 rounded-2xl bg-linear-to-br border summary-card theme-transition hover:shadow-lg">
            <div className="absolute -inset-1 rounded-2xl bg-linear-to-r summary-card-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-8 w-8 rounded-lg bg-linear-to-br summary-icon-purple-bg flex items-center justify-center">
                  <span className="summary-icon-purple">💻</span>
                </div>

                <h3 className="text-lg font-semibold summary-card-title theme-transition">
                  {t.about.summaryFocusTitle}
                </h3>
              </div>

              <p className="text-base leading-relaxed summary-card-text theme-transition">
                {t.about.summaryFocus}
              </p>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 p-6 rounded-2xl bg-linear-to-b border summary-sidebar-card theme-transition shadow-sm">
            <div className="mb-6">
              <div className="h-10 w-10 rounded-xl bg-linear-to-br from-blue-500/20 to-blue-600/20 flex items-center justify-center mb-4">
                <span className="summary-section-icon">🚀</span>
              </div>

              <h3 className="text-xl font-bold summary-sidebar-title theme-transition mb-2">
                {t.about.nextSection.title}
              </h3>

              <p className="text-sm summary-sidebar-subtitle theme-transition">
                {t.about.nextSection.subtitle}
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full summary-sidebar-dot animate-pulse" />
                <span className="text-sm font-medium summary-sidebar-item theme-transition">
                  {t.about.nextSection.items.projects}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div
                  className="h-2 w-2 rounded-full summary-sidebar-dot animate-pulse"
                  style={{ animationDelay: "0.2s" }}
                />
                <span className="text-sm font-medium summary-sidebar-item theme-transition">
                  {t.about.nextSection.items.experience}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div
                  className="h-2 w-2 rounded-full summary-sidebar-dot animate-pulse"
                  style={{ animationDelay: "0.4s" }}
                />
                <span className="text-sm font-medium summary-sidebar-item theme-transition">
                  {t.about.nextSection.items.caseStudies}
                </span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t summary-transition-divider theme-transition">
              <p className="text-base font-medium summary-transition-text theme-transition">
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
