import { useLanguage } from "../../hooks/useLanguage";

function Summary() {
  const { t } = useLanguage();
  return (
    <section className="max-w-2xl space-y-4" aria-label={t.home.summaryTitle}>
      {t.home.summary.split("\n\n").map((p, i) => (
        <p
          key={i}
          className="text-sm sm:text-base leading-relaxed text-zinc-700 dark:text-zinc-300"
        >
          {p}
        </p>
      ))}
    </section>
  );
}

export default Summary;
