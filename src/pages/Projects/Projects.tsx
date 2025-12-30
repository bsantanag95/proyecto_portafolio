import { projects } from "../../data/projects";
import { ProjectCard } from "../../components/Projects";

const Projects = () => {
  return (
    <section
      className="
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
