import {
  ReactIcon,
  GitHubIcon,
  TailwindIcon,
  TypeScriptIcon,
} from "../../components/icons";
import { useLanguage } from "../../hooks/useLanguage";

function GithubCTA() {
  const { t } = useLanguage();

  return (
    <section
      className="
        flex flex-col justify-between
        rounded-xl border border-zinc-200/20
        bg-zinc-50 dark:bg-zinc-900/50
        p-6 sm:p-8
        transition
        hover:border-zinc-300/40
      "
    >
      {/* Text */}
      <div className="space-y-4">
        <div className="space-y-3">
          <h3 className="text-lg sm:text-xl font-semibold">
            {t.home.githubTitle}
          </h3>

          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
            {t.home.githubDescription}
          </p>
        </div>

        {/* Stack */}
        <ul className="flex flex-wrap items-center gap-2 sm:gap-3">
          {/* React */}
          <li
            className="
    group flex items-center gap-1.5
    rounded-md border border-zinc-300/40
    bg-white dark:bg-zinc-900/40
    px-2.5 py-1.5 text-xs
    text-zinc-700 dark:text-zinc-400

    shadow-sm shadow-zinc-900/5
    transition-all duration-300

    hover:-translate-y-0.5
    hover:border-cyan-400/50
    hover:bg-cyan-50
    hover:shadow-md hover:shadow-cyan-400/25

    dark:hover:bg-cyan-400/10
    dark:hover:shadow-cyan-400/20
  "
          >
            <ReactIcon className="text-cyan-500 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110" />
            React
          </li>

          {/* TypeScript */}
          <li
            className="
      group flex items-center gap-1.5
      rounded-md border border-zinc-300/30
      bg-white/40 dark:bg-zinc-900/40
      px-2.5 py-1.5 text-xs
      text-zinc-600 dark:text-zinc-400
      transition-all duration-300
      hover:-translate-y-0.5
      hover:border-blue-500/40
      hover:bg-blue-50/60 dark:hover:bg-blue-500/10
      hover:shadow-md hover:shadow-blue-500/20
    "
          >
            <TypeScriptIcon className="text-blue-600 dark:text-blue-500 transition-transform duration-300 group-hover:scale-110" />
            TypeScript
          </li>

          {/* Tailwind */}
          <li
            className="
      group flex items-center gap-1.5
      rounded-md border border-zinc-300/30
      bg-white/40 dark:bg-zinc-900/40
      px-2.5 py-1.5 text-xs
      text-zinc-600 dark:text-zinc-400
      transition-all duration-300
      hover:-translate-y-0.5
      hover:border-cyan-300/40
      hover:bg-cyan-50/60 dark:hover:bg-cyan-300/10
      hover:shadow-md hover:shadow-cyan-300/20
    "
          >
            <TailwindIcon className="text-cyan-400 transition-transform duration-300 group-hover:scale-110" />
            Tailwind
          </li>
        </ul>
      </div>

      {/* CTA */}
      <a
        href="https://github.com/bsantanag95/proyecto_portafolio"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Ver repositorio en GitHub"
        className="
    group mt-8 inline-flex self-center items-center gap-2
    rounded-lg
    px-6 py-3 sm:px-5 sm:py-2.5
    text-sm font-medium

    bg-zinc-900 text-white
    shadow-md shadow-zinc-900/15

    transition-all duration-300
    hover:-translate-y-0.5
    hover:bg-zinc-800
    hover:shadow-lg hover:shadow-zinc-900/25

    active:translate-y-0

    dark:bg-zinc-100 dark:text-zinc-900
    dark:hover:bg-zinc-200
    dark:hover:shadow-zinc-100/20

    focus:outline-none
    focus-visible:ring-2 focus-visible:ring-zinc-400
  "
      >
        <GitHubIcon
          size={16}
          className="transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110"
        />
        {t.home.viewGithub}
      </a>
    </section>
  );
}

export default GithubCTA;
