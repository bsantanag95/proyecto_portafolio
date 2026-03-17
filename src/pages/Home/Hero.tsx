import highlightText from "../../helpers/formatText";
import { useLanguage } from "../../hooks/useLanguage";

function Hero() {
  const { t } = useLanguage();

  return (
    <section className="max-w-5xl mx-auto min-h-[75vh] flex flex-col justify-center px-4">
      <div className="space-y-6">
        {/* Disponibilidad */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Disponible */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border availability-badge theme-transition">
            <div className="w-2 h-2 rounded-full availability-dot theme-transition" />
            <span className="text-xs font-medium availability-text theme-transition">
              {t.home.availability}
            </span>
          </div>

          {/* Rol */}
          <span className="inline-block rounded-full px-3 py-1 text-xs uppercase tracking-wide role-badge theme-transition">
            {t.home.role}
          </span>
        </div>

        {/* Nombre */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-tight hero-name theme-transition">
          Esteban{" "}
          <span className="bg-linear-to-tr hero-name-gradient">Santana</span>
        </h1>

        {/* Especializacion */}
        <h2 className="text-lg sm:text-xl md:text-2xl font-medium leading-relaxed max-w-3xl hero-specialization theme-transition">
          {t.home.specialization.split("\n").map((line, index) => (
            <span
              key={index}
              className="block"
              dangerouslySetInnerHTML={{
                __html: highlightText(line),
              }}
            />
          ))}
        </h2>

        {/* Descripción */}
        <div className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {t.home.description.map((item, index) => (
              <div
                key={index}
                className="group rounded-xl border hero-description-item theme-transition"
              >
                <div className="flex items-start gap-3 p-4 transition-transform duration-300 ease-out group-hover:-translate-y-1">
                  {/* Indicador */}
                  <div className="flex items-center gap-3 shrink-0">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full text-xs font-medium bg-linear-to-r hero-indicator-number theme-transition">
                      {index + 1}
                    </div>

                    <div className="h-px w-4 bg-linear-to-r hero-indicator-line theme-transition group-hover:w-6" />
                  </div>

                  <p className="text-sm sm:text-base leading-relaxed hero-description-text theme-transition">
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
