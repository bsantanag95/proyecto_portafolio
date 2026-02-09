import type { Project } from "../../types/projects";
import { StackBadge } from "../Stack";
import { useLanguage } from "../../hooks/useLanguage";
import GitHubButton from "../ui/GitHubButton";

interface Props {
  project: Project;
  language: "es" | "en";
}

const ProjectInfo = ({ project, language }: Props) => {
  const { t } = useLanguage();
  return (
    <div className="space-y-6 max-w-3xl">
      {/* Title */}
      <h1 className="text-3xl font-bold">{project.title[language]}</h1>

      {/* Description */}
      <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
        {project.description[language]}
      </p>

      {/* Tech info */}
      {/* <div className="grid gap-4 sm:grid-cols-2">
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
      </div> */}

      {/* Stack */}
      <ul className="flex flex-wrap items-center gap-2 sm:gap-3">
        {project.stack.map((tech) => (
          <StackBadge key={tech} tech={tech} />
        ))}
      </ul>

      {/* GitHub */}
      <GitHubButton href={project.github} label={t.home.viewGithub} />
    </div>
  );
};

export default ProjectInfo;
