import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { Project } from "../../types/projects";
import { useLanguage } from "../../hooks/useLanguage";
import { StackBadge } from "../Stack";
import { Eye } from "lucide-react";

interface Props {
  project: Project;
}

const ProjectCard = ({ project }: Props) => {
  const { language, t } = useLanguage();

  return (
    <motion.article
      layoutId={`project-${project.slug}`}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="rounded-xl overflow-hidden project-card-surface theme-transition cursor-pointer"
    >
      <div className="absolute -inset-1 rounded-2xl bg-linear-to-r project-card-glow theme-transition opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />

      <Link
        to={`/projects/${project.slug}`}
        className="
          group relative
          flex flex-col h-full
          overflow-hidden rounded-xl
          border project-card-container
          theme-transition
          transition-all duration-300
          hover:shadow-lg
        "
      >
        {/* Contenedor de imagen */}
        <div className="relative overflow-hidden">
          <img
            src={project.images[0]}
            alt={project.title[language]}
            className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-linear-to-t project-card-image-overlay theme-transition to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Badge */}
          <div className="absolute top-3 right-3">
            <div className="px-2 py-1 rounded-md project-card-badge theme-transition backdrop-blur-sm text-xs font-medium">
              {project.category}
            </div>
          </div>

          {/* Icono */}
          <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="h-8 w-8 rounded-full project-card-eye theme-transition backdrop-blur-sm flex items-center justify-center">
              <Eye
                size={14}
                className="project-card-eye-icon theme-transition"
              />
            </div>
          </div>
        </div>

        {/* Contenido */}
        <div className="flex flex-col flex-1 p-5 space-y-4">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-semibold project-card-title theme-transition text-lg leading-tight">
              {project.title[language]}
            </h3>
          </div>

          <p className="text-sm project-card-description theme-transition leading-relaxed flex-1">
            {project.intro[language]}
          </p>

          {/* Stack */}
          <div className="pt-4 border-t project-card-divider theme-transition">
            <div className="flex flex-wrap gap-2">
              {project.stack.slice(0, 4).map((tech) => (
                <StackBadge
                  key={tech}
                  tech={tech}
                  className="text-xs px-2.5 py-1 rounded-lg transition-colors"
                />
              ))}

              {project.stack.length > 4 && (
                <span className="text-xs px-2.5 py-1 rounded-lg project-card-stack-more theme-transition">
                  +{project.stack.length - 4}
                </span>
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-2 text-xs project-card-footer theme-transition">
            <span>{t.projects.details}</span>
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              →
            </span>
          </div>
        </div>

        {/* Línea inferior */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r project-card-bottom-line theme-transition opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </Link>
    </motion.article>
  );
};

export default ProjectCard;
