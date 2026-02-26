import Heading from "../../atoms/Heading/Heading";
import SkillBar from "../../atoms/SkillBar/SkillBar";

export type SkillItem = {
  name: string;
  percentage: number;
};

interface SkillsProps {
  title?: string;
  skills: SkillItem[];
}

export default function Skills({
  title = "Technical Proficiency",
  skills = [],
}: SkillsProps) {
  return (
    <section className="py-20 max-w-5xl mx-auto">
      <div className="flex flex-col gap-12">
        <Heading level="h2" className="text-3xl font-bold">
          {title}
        </Heading>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
          {skills.map((skill) => (
            <SkillBar
              key={skill.name}
              name={skill.name}
              percentage={skill.percentage}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
