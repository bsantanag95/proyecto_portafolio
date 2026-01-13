import { useLanguage } from "../../hooks/useLanguage";

function Summary() {
  const { t } = useLanguage();

  return (
    <section className="max-w-2xl space-y-4">
      <p className="text-sm sm:text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
        {t.home.summaryIntro}
      </p>

      <p className="text-sm sm:text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
        {t.home.summaryFocus}
      </p>

      <p className="text-sm sm:text-base font-medium text-zinc-800 dark:text-zinc-200">
        {t.home.summaryBridge}
      </p>
    </section>
  );
}

export default Summary;
