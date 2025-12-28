import { useLanguage } from "../hooks/useLanguage";

function Highlights() {
  const { t } = useLanguage();
  return (
    <section>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {t.home.highlights.map((item: string) => (
          <li
            key={item}
            className="
              flex items-start gap-2
              text-zinc-700 dark:text-zinc-300
            "
          >
            <span className="text-green-500">✔</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Highlights;
