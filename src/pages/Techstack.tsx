import { useLanguage } from "../hooks/useLanguage";

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
      <h3 className="text-lg font-semibold mb-4">{t.home.techStack}</h3>

      <ul className="flex flex-wrap gap-3">
        {stack.map((tech) => (
          <li
            key={tech}
            className="
              rounded-full px-4 py-1
              bg-zinc-200 dark:bg-zinc-800
              text-sm
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
