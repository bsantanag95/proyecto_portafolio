import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useParams, Navigate } from "react-router-dom";
import { projects } from "../../data/projects";
import { useLanguage } from "../../hooks/useLanguage";
import {
  ProjectBreadcrumb,
  ProjectCarousel,
  ProjectCarouselSkeleton,
  ProjectInfo,
} from "../../components/Projects";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { language } = useLanguage();
  const shouldReduceMotion = useReducedMotion();
  const [loaded, setLoaded] = useState(false);

  const handleImageLoad = () => {
    setLoaded(true);
  };

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
  space-y-8 sm:space-y-12
"
    >
      <ProjectBreadcrumb title={project.title[language]} />
      <div className="relative h-56 sm:h-80 md:h-96">
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: loaded ? 0 : 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute inset-0 z-10 pointer-events-none"
        >
          <ProjectCarouselSkeleton />
        </motion.div>

        <ProjectCarousel
          images={project.images}
          onImageLoad={handleImageLoad}
        />
      </div>

      <ProjectInfo project={project} language={language} />
    </motion.section>
  );
};

export default ProjectDetail;
