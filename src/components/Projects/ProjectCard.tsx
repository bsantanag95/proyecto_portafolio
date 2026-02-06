import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { Project } from "../../types/projects";
import { useLanguage } from "../../hooks/useLanguage";
import { StackBadge } from "../Stack";
import { ArrowUpRight, Eye } from "lucide-react";

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
      className="rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-900 cursor-pointer"
    >
      <div className="absolute -inset-1 rounded-2xl bg-linear-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />

      <Link
        to={`/projects/${project.slug}`}
        className="
          group relative
          flex flex-col h-full
          overflow-hidden rounded-xl
          border border-zinc-200/60 bg-white/50
          transition-all duration-300
          hover:border-blue-300/60 hover:shadow-lg hover:shadow-blue-500/10
          dark:border-zinc-700/60 dark:bg-zinc-800/30
          dark:hover:border-blue-500/40 dark:hover:shadow-blue-500/5
        "
      >
        {/* Contenedor de imagen con overlay */}
        <div className="relative overflow-hidden">
          <img
            src={project.images[0]}
            alt={project.title[language]}
            className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Overlay sutil en hover */}
          <div className="absolute inset-0 bg-linear-to-t from-zinc-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Badge de estado o categoría */}
          <div className="absolute top-3 right-3">
            <div className="px-2 py-1 rounded-md bg-white/90 backdrop-blur-sm text-xs font-medium text-zinc-800 dark:bg-zinc-900/90 dark:text-zinc-200">
              {project.category}
            </div>
          </div>

          {/* Indicador de enlace */}
          <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="h-8 w-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center dark:bg-zinc-900/90">
              <Eye size={14} className="text-blue-600 dark:text-blue-400" />
            </div>
          </div>
        </div>

        {/* Contenido de la tarjeta */}
        <div className="flex flex-col flex-1 p-5 space-y-4">
          {/* Header con título y flecha */}
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 text-lg leading-tight">
              {project.title[language]}
            </h3>

            {/* Flecha indicadora */}
            <motion.div
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 0 }}
              whileHover={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              className="shrink-0 text-blue-600 dark:text-blue-400"
            >
              <ArrowUpRight size={18} />
            </motion.div>
          </div>

          {/* Descripción */}
          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed flex-1">
            {project.intro[language]}
          </p>

          {/* Stack tecnológico */}
          <div className="pt-4 border-t border-zinc-200/30 dark:border-zinc-700/30">
            <div className="flex flex-wrap gap-2">
              {project.stack.slice(0, 4).map((tech) => (
                <StackBadge
                  key={tech}
                  tech={tech}
                  className="text-xs px-2.5 py-1 rounded-lg bg-zinc-100/80 text-zinc-800 hover:bg-blue-100/80 hover:text-blue-800 transition-colors dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-blue-900/30 dark:hover:text-blue-300"
                />
              ))}
              {project.stack.length > 4 && (
                <span className="text-xs px-2.5 py-1 rounded-lg bg-zinc-100/80 text-zinc-500 dark:bg-zinc-800/50 dark:text-zinc-500">
                  +{project.stack.length - 4}
                </span>
              )}
            </div>
          </div>

          {/* Footer con más info */}
          <div className="flex items-center justify-between pt-2 text-xs text-zinc-500 dark:text-zinc-500">
            <span>{t.projects.details}</span>
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              →
            </span>
          </div>
        </div>

        {/* Línea decorativa inferior */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-blue-500/0 via-blue-500/30 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </Link>
    </motion.article>
  );
};

export default ProjectCard;
