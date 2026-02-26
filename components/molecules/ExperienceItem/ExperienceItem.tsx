import Heading from "../../atoms/Heading/Heading";

export type ExperienceItemProps = {
  company: string;
  role: string;
  duration: string;
  description: string[]; // Use an array for bullet points
};

export default function ExperienceItem({ company, role, duration, description }: ExperienceItemProps) {
  return (
    <div className="relative pl-8 pb-12 last:pb-0 group">
      {/* Timeline Line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-brand/10 group-last:bg-transparent" />
      
      {/* Timeline Dot */}
      <div className="absolute left-[-4px] top-2 h-2 w-2 rounded-full bg-brand ring-4 ring-brand/5 group-hover:scale-125 transition-transform" />

      <div className="flex flex-col gap-2">
        <span className="text-xs font-bold text-brand uppercase tracking-widest">{duration}</span>
        <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
          <Heading level="h3" className="text-xl font-bold text-foreground">{role}</Heading>
          <span className="hidden sm:inline text-muted">•</span>
          <span className="text-lg font-medium text-muted">{company}</span>
        </div>
        
        <ul className="mt-2 space-y-2">
          {description.map((point, i) => (
            <li key={i} className="text-text leading-relaxed flex items-start gap-2">
              {/* shrink-0 prevents the dot from squishing, mt-1.5 aligns it with text height */}
              <span className="text-brand shrink-0 mt-1.5 leading-none" aria-hidden="true">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}