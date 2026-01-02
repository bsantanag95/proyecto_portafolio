import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLanguage } from "../../hooks/useLanguage";

interface Props {
  title: string;
}

const ProjectBreadcrumb = ({ title }: Props) => {
  const { t } = useLanguage();

  return (
    <motion.nav
      initial={{ y: -6, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
    >
      <Link to="/projects" className="hover:text-zinc-700 dark:text-zinc-300">
        {t.projects.breadcrumb}
      </Link>
      <span className="mx-2">/</span>
      <span className="text-zinc-700 dark:text-zinc-300">{title}</span>
    </motion.nav>
  );
};

export default ProjectBreadcrumb;
