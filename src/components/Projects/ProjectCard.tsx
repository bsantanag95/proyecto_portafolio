import { Link } from "react-router-dom";
import type { Project } from "../../types/projects";
import { useLanguage } from "../../hooks/useLanguage";

interface Props {
  project: Project;
}

const ProjectCard = ({ project }: Props) => {
  const { language } = useLanguage();

  return (
    <Link
      to={`/projects/${project.slug}`}
      className="
        group overflow-hidden rounded-xl
        border border-zinc-200 dark:border-zinc-800
        hover:shadow-lg transition
      "
    >
      <img
        src={project.images[0]}
        alt={project.title[language]}
        className="h-48 w-full object-cover"
      />

      <div className="p-4 space-y-2">
        <h3 className="font-semibold">{project.title[language]}</h3>

        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          {project.summary[language]}
        </p>

        <ul className="flex flex-wrap gap-2">
          {project.stack.slice(0, 3).map((tech) => (
            <li
              key={tech}
              className="text-xs rounded-full px-2 py-0.5
                bg-zinc-200 dark:bg-zinc-800"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
};

export default ProjectCard;
