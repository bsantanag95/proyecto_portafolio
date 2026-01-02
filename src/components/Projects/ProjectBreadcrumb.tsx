import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLanguage } from "../../hooks/useLanguage";

interface Props {
  title: string;
}

const ProjectBreadcrumb = ({ title }: Props) => {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();

  return (
    <motion.nav
      initial={{ opacity: 0, y: reduceMotion ? 0 : -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: reduceMotion ? 0 : 0.3, ease: "easeOut" }}
      className="
        flex items-center gap-2
        text-xs sm:text-sm
        text-zinc-500 dark:text-zinc-400
        max-w-full
      "
    >
      <Link
        to="/projects"
        className="hover:text-zinc-900 dark:hover:text-zinc-100 transition"
      >
        {t.projects.breadcrumb}
      </Link>

      <span className="opacity-60">/</span>

      <span
        className="
          font-medium text-zinc-900 dark:text-zinc-100
          truncate
        "
      >
        {title}
      </span>
    </motion.nav>
  );
};

export default ProjectBreadcrumb;
