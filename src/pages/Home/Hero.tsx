import highlightText from "../../helpers/formatText";
import { useLanguage } from "../../hooks/useLanguage";

function Hero() {
  const { t } = useLanguage();

  return (
    <section className="max-w-6xl space-y-5 md:space-y-6 min-h-[70vh] flex flex-col justify-center">
      {/* Disponibilidad */}
      <div className="flex flex-wrap items-center gap-3">
        {/* Disponible */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
          <div className="w-2 h-2 rounded-full bg-blue-500" />
          <span className="text-xs font-medium text-blue-600 dark:text-blue-400">
            {t.home.availability}
          </span>
        </div>

        {/* Rol */}
        <span className="inline-block w-fit rounded-full border border-zinc-700/60 px-3 py-1 text-xs uppercase tracking-wide text-zinc-400">
          {t.home.role}
        </span>
      </div>

      {/* Nombre */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
        Esteban{" "}
        <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400">
          Santana
        </span>
      </h1>

      {/* Especializacion */}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-zinc-800 dark:text-zinc-200">
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
              className="group flex items-start gap-3 rounded-lg p-3 transition-colors duration-300 hover:bg-blue-50/30 dark:hover:bg-blue-900/5"
            >
              {/* Indicador con línea */}
              <div className="relative flex shrink-0 items-center">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-linear-to-br from-blue-500/20 to-purple-500/20 text-xs font-medium text-blue-700 dark:text-blue-400">
                  {index + 1}
                </div>
                <div className="ml-3 h-px w-3 bg-linear-to-r from-blue-400/30 to-transparent group-hover:w-6 group-hover:from-blue-400/70 transition-all duration-300" />
              </div>

              {/* Texto */}
              <p className="flex-1 text-sm text-zinc-700 dark:text-zinc-300 sm:text-base">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Stack */}
      {/* <div className="flex flex-wrap gap-3 mt-8">
        {["React 18+", "TypeScript", "Tailwind CSS"].map((tech) => (
          <div
            key={tech}
            className="px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800/50 text-sm font-medium text-zinc-700 dark:text-zinc-300"
          >
            {tech}
          </div>
        ))}
      </div> */}
    </section>
  );
}

export default Hero;
