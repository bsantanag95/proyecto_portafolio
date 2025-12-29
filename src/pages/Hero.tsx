import { useLanguage } from "../hooks/useLanguage";

function Hero() {
  const { t } = useLanguage();

  return (
    <section className="min-h-[80vh] flex flex-col justify-center">
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
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <a
          href="/cv/Esteban_Santana_CV.pdf"
          download
          className="
            rounded-lg px-6 py-3
            bg-zinc-900 text-white
            dark:bg-zinc-100 dark:text-zinc-900
            hover:opacity-90 transition
          "
        >
          {t.home.downloadCv}
        </a>

        <a
          href="https://github.com/tu-usuario"
          target="_blank"
          rel="noopener noreferrer"
          className="
            rounded-lg px-6 py-3
            border border-zinc-300 dark:border-zinc-700
            hover:bg-zinc-100 dark:hover:bg-zinc-800
            transition
          "
        >
          {t.home.viewGithub}
        </a>
      </div>
    </section>
  );
}

export default Hero;
