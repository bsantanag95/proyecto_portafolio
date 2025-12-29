import { useLanguage } from "../../hooks/useLanguage";

const stack = [
  "React",
  "TypeScript",
  "Laravel",
  "PHP",
  "JavaScript",
  "HTML5",
  "MySQL",
];

function Techstack() {
  const { t } = useLanguage();

  return (
    <section>
      <h3 className="text-base sm:text-lg font-semibold mb-4">
        {t.home.techStack}
      </h3>

      <ul className="flex flex-wrap gap-2 sm:gap-3">
        {stack.map((tech) => (
          <li
            key={tech}
            className="
          rounded-full
          px-3 py-1 sm:px-4
          text-xs sm:text-sm
          bg-zinc-200 dark:bg-zinc-800
          text-zinc-800 dark:text-zinc-200
        "
          >
            {tech}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Techstack;
