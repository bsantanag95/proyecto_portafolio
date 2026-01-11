import { useLanguage } from "../../hooks/useLanguage";
import { Download } from "lucide-react";
import GitHubIcon from "../../components/icons/GitHubIcon";

function Hero() {
  const { t } = useLanguage();

  return (
    <section className="max-w-3xl space-y-6 min-h-[80vh] flex flex-col justify-center">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
        Esteban Santana
      </h1>

      <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-zinc-700 dark:text-zinc-300">
        {t.home.role}
      </h2>

      <p className="mt-4 max-w-xl text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
        {t.home.specialization}
      </p>

      {/* CTA */}
      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href="cv/CV - Esteban Santana.pdf"
          download
          className="
    inline-flex items-center gap-2
    rounded-lg px-5 py-3
    text-sm font-medium
    bg-zinc-900 text-white
    hover:bg-zinc-800
    dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200
    transition
  "
          aria-label="Descargar currículum en PDF"
        >
          <Download size={16} aria-hidden="true" />
          {t.home.downloadCv}
        </a>

        <a
          href="https://github.com/tu-usuario"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2"
        >
          <GitHubIcon size={18} />
          {t.home.viewGithub}
        </a>
      </div>
    </section>
  );
}

export default Hero;
