import AppImage from "../../atoms/AppImage/AppImage";
import Heading from "../../atoms/Heading/Heading";
import Button from "../../atoms/Button/Button";

export type ProjectItem = {
  title: string;
  description: string;
  imageSrc?: string;
  tags: string[];
  link: string;
};

export default function ProjectCard({ title, description, imageSrc, tags, link }: ProjectItem) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg border border-brand/10 bg-surface shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
      {/* Project Image Container */}
      <div className="relative aspect-video w-full overflow-hidden">
        <AppImage
          src={imageSrc}
          alt={title}
          width={400}
          height={400}
          aspectRatio="video"
          imageClassName="group-hover:scale-105 transition-transform duration-700"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-brand/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>

      {/* Content Area */}
      <div className="flex flex-1 flex-col p-6 lg:p-8">
        <div className="mb-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="rounded-full bg-brand-highlight px-3 py-1 text-xs font-bold tracking-wide text-highlight uppercase">
              {tag}
            </span>
          ))}
        </div>

        <Heading level="h3" className="mb-3 text-2xl font-bold text-brand">
          {title}
        </Heading>

        <p className="mb-6 line-clamp-3 text-sm leading-relaxed text-text">
          {description}
        </p>

        <div className="mt-auto">
          <Button variant="outline" className="w-full lg:w-auto">
            View Case Study
          </Button>
        </div>
      </div>
    </div>
  );
}
