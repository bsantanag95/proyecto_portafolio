import highlightText from "../../helpers/formatText";
import { useLanguage } from "../../hooks/useLanguage";

function Hero() {
  const { t } = useLanguage();

  return (
    <section className="max-w-6xl space-y-5 md:space-y-6 min-h-[70vh] flex flex-col justify-center">
      {/* Disponibilidad */}
      <div className="flex flex-wrap items-center gap-3">
        {/* Disponible */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full  border availability-badge">
          <div className="w-2 h-2 rounded-full availability-dot" />
          <span className="text-xs font-medium availability-text">
            {t.home.availability}
          </span>
        </div>

        {/* Rol */}
        <span className="inline-block w-fit rounded-full border role-badge px-3 py-1 text-xs uppercase tracking-wide ">
          {t.home.role}
        </span>
      </div>

      {/* Nombre */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
        Esteban{" "}
        <span className="bg-linear-to-r bg-clip-text hero-name-gradient">
          Santana
        </span>
      </h1>

      {/* Especializacion */}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold hero-specialization">
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
      <div className="mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          {t.home.description.map((item, index) => (
            <div
              key={index}
              className="group flex items-start gap-3 rounded-lg p-3 hero-description-item"
            >
              {/* Indicador con línea */}
              <div className="relative flex shrink-0 items-center">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-linear-to-br text-xs font-medium hero-indicator-number">
                  {index + 1}
                </div>
                <div className="ml-3 h-px w-3 bg-linear-to-r hero-indicator-line group-hover:w-6 transition-all duration-300" />
              </div>

              {/* Texto */}
              <p className="flex-1 text-sm hero-description-text sm:text-base">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
