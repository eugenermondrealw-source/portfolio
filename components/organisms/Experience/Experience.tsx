import Heading from "../../atoms/Heading/Heading";
import ExperienceItem, { ExperienceItemProps } from "../../molecules/ExperienceItem/ExperienceItem";

interface ExperienceProps {
  title?: string;
  items: ExperienceItemProps[];
}

export default function Experience({ title = "Work Experience", items }: ExperienceProps) {
  return (
    <section className="mx-auto px-6 py-24 border-t border-brand/5">
      <div className="flex flex-col gap-12">
        <Heading level="h2" className="text-3xl font-bold">{title}</Heading>
        
        <div className="flex flex-col">
          {items.map((item, idx) => (
            <ExperienceItem key={idx} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}