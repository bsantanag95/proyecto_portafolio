import { motion, useReducedMotion } from "framer-motion";
import { useParams, Navigate } from "react-router-dom";
import { projects } from "../../data/projects";
import { useLanguage } from "../../hooks/useLanguage";
import { ProjectCarousel, ProjectInfo } from "../../components/Projects";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { language } = useLanguage();
  const shouldReduceMotion = useReducedMotion();

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/proyects" replace />;
  }

  return (
    <motion.section
      layoutId={`project-${project.slug}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.4, ease: "easeInOut" }}
      className="
    mx-auto
    w-full max-w-6xl
    px-4 sm:px-6 lg:px-8
    space-y-12
  "
    >
      <ProjectCarousel images={project.images} />
      <ProjectInfo project={project} language={language} />
    </motion.section>
  );
};

export default ProjectDetail;
