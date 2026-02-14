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
    <div className="space-y-8 max-w-3xl">
      {/* Title */}
      <div className="space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          {project.title[language]}
        </h1>
        <div className="h-px w-16 bg-linear-to-r from-blue-500/50 to-transparent" />
      </div>

      {/* Description */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
          {language === "es" ? "Sobre el proyecto" : "About the project"}
        </h2>
        <div className="p-5 rounded-xl bg-zinc-50/50 border border-zinc-200/30 dark:bg-zinc-800/20 dark:border-zinc-700/30">
          <p className="text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
            {project.description[language]}
          </p>
        </div>
      </div>

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
