import type { Project } from "../../types/projects";

interface Props {
  project: Project;
  language: "es" | "en";
}

const ProjectInfo = ({ project, language }: Props) => {
  return (
    <div className="space-y-6 max-w-3xl">
      {/* Title */}
      <h1 className="text-3xl font-bold">{project.title[language]}</h1>

      {/* Description */}
      <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
        {project.description[language]}
      </p>

      {/* Tech info */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <h4 className="font-semibold">Backend</h4>
          <p className="text-zinc-600 dark:text-zinc-400">{project.backend}</p>
        </div>

        <div>
          <h4 className="font-semibold">Database</h4>
          <p className="text-zinc-600 dark:text-zinc-400">
            {project.database ?? "—"}
          </p>
        </div>
      </div>

      {/* Stack */}
      <ul className="flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <li
            key={tech}
            className="
              rounded-full px-3 py-1 text-sm
              bg-zinc-200 dark:bg-zinc-800
            "
          >
            {tech}
          </li>
        ))}
      </ul>

      {/* GitHub */}
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="
    inline-flex justify-center
    w-full sm:w-auto
    rounded-lg px-6 py-3
    bg-zinc-900 text-white
    dark:bg-zinc-100 dark:text-zinc-900
    hover:opacity-90 transition
  "
      >
        Ver en GitHub
      </a>
    </div>
  );
};

export default ProjectInfo;
