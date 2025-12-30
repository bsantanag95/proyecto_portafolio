import { useParams, Navigate } from "react-router-dom";
import { projects } from "../../data/projects";
import { useLanguage } from "../../hooks/useLanguage";
import { ProjectGallery, ProjectInfo } from "../../components/Projects";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { language } = useLanguage();

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/proyects" replace />;
  }

  return (
    <section
      className="
    mx-auto
    w-full max-w-6xl
    px-4 sm:px-6 lg:px-8
    space-y-12
  "
    >
      <ProjectGallery images={project.images} />
      <ProjectInfo project={project} language={language} />
    </section>
  );
};

export default ProjectDetail;
