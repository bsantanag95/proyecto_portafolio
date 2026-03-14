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
        breadcrumb
        theme-transition
        max-w-full
      "
    >
      <Link to="/projects" className="breadcrumb-link theme-transition">
        {t.projects.breadcrumb}
      </Link>

      <span className="opacity-60">/</span>

      <span
        className="
          font-medium breadcrumb-current
          theme-transition
          truncate
        "
      >
        {title}
      </span>
    </motion.nav>
  );
};

export default ProjectBreadcrumb;
