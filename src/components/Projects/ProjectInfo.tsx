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
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight project-title">
          {project.title[language]}
        </h1>
        <div className="h-px w-16 bg-linear-to-r project-title-divider" />
      </div>

      {/* Description */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold project-section-title flex items-center gap-2">
          {language === "es" ? "Sobre el proyecto" : "About the project"}
        </h2>
        <div className="p-5 rounded-xl border project-description-box">
          <p className="text-base leading-relaxed project-description-text">
            {project.description[language]}
          </p>
        </div>
      </div>

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
