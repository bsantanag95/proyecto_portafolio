import { Download } from "lucide-react";
import { useLanguage } from "../../hooks/useLanguage";

function CvCta() {
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
        <h3 className="text-lg sm:text-xl font-semibold">{t.home.cvTitle}</h3>

        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
          {t.home.cvDescription}
        </p>
      </div>

      {/* CTA */}
      <a
        href="cv/CV - Esteban Santana.pdf"
        download
        aria-label="Descargar currículum en PDF"
        className="
          group mt-8 inline-flex self-center items-center gap-2
          rounded-lg px-5 py-2.5
          text-sm font-medium
          bg-zinc-900 text-white
          dark:bg-zinc-100 dark:text-zinc-900

          transition-all duration-300
          hover:-translate-y-0.5
          hover:bg-zinc-800 dark:hover:bg-zinc-200
          hover:shadow-lg hover:shadow-zinc-900/20 dark:hover:shadow-zinc-100/20

          active:translate-y-0
          focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400
        "
      >
        <Download
          size={16}
          className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-110"
        />
        {t.home.downloadCv}
      </a>
    </section>
  );
}

export default CvCta;
