import { User } from "lucide-react";
import { useLanguage } from "../../hooks/useLanguage";

function Summary() {
  const { t } = useLanguage();

  return (
    <section className="max-w-5xl space-y-10 mt-20">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold summary-section-title flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-linear-to-br summary-section-icon-bg flex items-center justify-center">
            <User size={18} className="summary-section-icon" />
          </div>
          {t.about.summaryTitle}
        </h2>
        <div className="h-px w-full bg-linear-to-r summary-divider" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        <div className="lg:col-span-2 space-y-8">
          <div className="group relative p-6 rounded-2xl bg-linear-to-br border summary-card transition-all duration-500 hover:shadow-lg ">
            <div className="absolute -inset-1 rounded-2xl bg-linear-to-r summary-card-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-8 w-8 rounded-lg bg-linear-to-br from-blue-500/20 to-blue-600/20 flex items-center justify-center">
                  <span className="summary-section-icon">👋</span>
                </div>
                <h3 className="text-lg font-semibold summary-card-title">
                  {t.about.summaryIntroTitle}
                </h3>
              </div>

              <p className="text-base leading-relaxed summary-card-text">
                {t.about.summaryIntro}
              </p>
            </div>
          </div>

          <div className="group relative p-6 rounded-2xl bg-linear-to-br border summary-card transition-all duration-500 hover:shadow-lg">
            <div className="absolute -inset-1 rounded-2xl bg-linear-to-r summary-card-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-8 w-8 rounded-lg bg-linear-to-br summary-icon-purple-bg flex items-center justify-center">
                  <span className="summary-icon-purple">💻</span>
                </div>
                <h3 className="text-lg font-semibold summary-card-title">
                  {t.about.summaryFocusTitle}
                </h3>
              </div>

              <p className="text-base leading-relaxed summary-card-text">
                {t.about.summaryFocus}
              </p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-1">
          <div className="sticky top-24 p-6 rounded-2xl bg-linear-to-b border summary-sidebar-card shadow-sm ">
            <div className="mb-6">
              <div className="h-10 w-10 rounded-xl bg-linear-to-br from-blue-500/20 to-blue-600/20 flex items-center justify-center mb-4">
                <span className="summary-section-icon">🚀</span>
              </div>
              <h3 className="text-xl font-bold summary-sidebar-title mb-2">
                {t.about.nextSection.title}
              </h3>
              <p className="text-sm summary-sidebar-subtitle">
                {t.about.nextSection.subtitle}
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full summary-sidebar-dot animate-pulse" />
                <span className="text-sm font-medium summary-sidebar-item">
                  {t.about.nextSection.items.projects}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div
                  className="h-2 w-2 rounded-full summary-sidebar-dot animate-pulse"
                  style={{ animationDelay: "0.2s" }}
                />
                <span className="text-sm font-medium summary-sidebar-item">
                  {t.about.nextSection.items.experience}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div
                  className="h-2 w-2 rounded-full summary-sidebar-dot animate-pulse"
                  style={{ animationDelay: "0.4s" }}
                />
                <span className="text-sm font-medium summary-sidebar-item">
                  {t.about.nextSection.items.caseStudies}
                </span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t summary-transition-divider">
              <p className="text-base font-medium summary-transition-text">
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
