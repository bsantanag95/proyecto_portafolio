import { useLanguage } from "../../hooks/useLanguage";

function Summary() {
  const { t } = useLanguage();
  return (
    <section className="max-w-2xl">
      <p
        className="
      text-sm sm:text-base
      leading-relaxed
      text-zinc-700 dark:text-zinc-300
    "
      >
        {t.home.summary}
      </p>
    </section>
  );
}

export default Summary;
