import { projects } from "../../data/projects";
import { ProjectCard } from "../../components/Projects";
import { usePageTitle } from "../../hooks/usePageTitle";
import { useLanguage } from "../../hooks/useLanguage";

const Projects = () => {
  const { t } = useLanguage();
  {
    usePageTitle(t.sidebar.projects + " · Esteban Santana");
  }
  return (
    <section
      className="
        mx-auto
        max-w-6xl
        px-4 sm:px-6 lg:px-8
        pt-24 pb-24
        grid gap-6
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
      "
    >
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </section>
  );
};

export default Projects;
