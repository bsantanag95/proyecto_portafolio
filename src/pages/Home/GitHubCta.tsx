import {
  ReactIcon,
  TailwindIcon,
  TypeScriptIcon,
} from "../../components/icons";
import GitHubButton from "../../components/ui/GitHubButton";
import { useLanguage } from "../../hooks/useLanguage";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

function GithubCTA() {
  const { t } = useLanguage();

  return (
    <section
      className="
        flex flex-col justify-between
        rounded-xl border github-card
        p-6 sm:p-8
        transition
        theme-transition
      "
    >
      {/* Text */}
      <div className="space-y-4">
        <div className="space-y-3">
          <h3 className="text-lg sm:text-xl font-semibold">
            {t.home.githubTitle}
          </h3>

          <p className="text-sm sm:text-base github-description">
            {t.home.githubDescription}
          </p>
        </div>

        {/* Stack */}
        <ul className="flex flex-wrap items-center gap-2 sm:gap-3">
          {/* React */}
          <li
            className="
              group flex items-center gap-1.5
              rounded-md border 
              px-2.5 py-1.5 text-xs
              shadow-sm
              stack-badge
              stack-react
              transition-all duration-300
              hover:-translate-y-0.5
              hover:shadow-md cursor-default
              theme-transition
            "
          >
            <ReactIcon className="stack-react-icon transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110" />
            React
          </li>

          {/* TypeScript */}
          <li
            className="
              group flex items-center gap-1.5
              rounded-md border 
              stack-badge
              stack-typescript
              px-2.5 py-1.5 text-xs
              transition-all duration-300
              theme-transition
              hover:-translate-y-0.5
              hover:shadow-md cursor-default
            "
          >
            <TypeScriptIcon className="stack-typescript-icon transition-transform duration-300 group-hover:scale-110" />
            TypeScript
          </li>

          {/* Tailwind */}
          <li
            className="
              group flex items-center gap-1.5
              rounded-md border 
              stack-badge
              stack-tailwind
              px-2.5 py-1.5 text-xs
              transition-all duration-300
              theme-transition
              hover:-translate-y-0.5
              hover:shadow-md cursor-default
            "
          >
            <TailwindIcon className="stack-tailwind-icon transition-transform duration-300 group-hover:scale-110" />
            Tailwind
          </li>
        </ul>
      </div>

      {/* CTA */}
      <div className="pt-6 flex justify-center gap-3">
        <GitHubButton
          href="https://github.com/bsantanag95/proyecto_portafolio"
          label={t.home.viewGithub}
          aria-label={t.home.viewGithub}
        />

        <Link
          to="/projects/portafolio"
          aria-label={t.home.viewDetails}
          className="
      group relative inline-flex items-center justify-center gap-2
      overflow-hidden rounded-lg px-6 py-3 sm:px-5 sm:py-2.5
      text-sm font-medium
      transition-all duration-300
      focus:outline-none focus-visible:ring-2

      bg-linear-to-r view-details-button
      shadow-md
      theme-transition
      hover:-translate-y-0.5
      hover:shadow-lg
    "
        >
          {/* Icono */}
          <ArrowRight className="relative w-4 h-4 transition-all duration-300 group-hover:translate-x-1" />

          {/* Texto */}
          <span className="relative">{t.home.viewDetails}</span>
        </Link>
      </div>
    </section>
  );
}

export default GithubCTA;
