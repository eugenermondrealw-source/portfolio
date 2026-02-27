import ProjectCard, { ProjectItem } from "../../molecules/ProjectCard/ProjectCard";
import Heading from "../../atoms/Heading/Heading";

interface ProjectGridProps {
  title?: string;
  projects?: ProjectItem[]; // Made optional so it can use default
}

export default function ProjectGrid({ 
  title = "Featured Projects", 
  projects = [],
}: ProjectGridProps) {
  return (
    <section className="mx-auto max-w-7xl py-20 border-t border-brand/25">
      <div className="mb-16 flex flex-col items-center text-center">
        <Heading level="h2" className="mb-4 text-4xl font-extrabold">
          {title}
        </Heading>
        <div className="h-1.5 w-20 rounded-full bg-brand-highlight" />
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </section>
  );
}
