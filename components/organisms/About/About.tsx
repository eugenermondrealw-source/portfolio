import Heading from "../../atoms/Heading/Heading";
import RichText from "../../atoms/RichText/RichText";
import AppImage from "../../atoms/AppImage/AppImage";
import StatCard from "@/components/atoms/StatCard/StatCard";

interface AboutProps {
  title?: string;
  content: string;
  imageSrc?: string;
  stats?: { label: string; value: string }[];
  tags?: string[];
}

export default function About({
  title = "About Me",
  content,
  imageSrc,
  stats = [],
  tags = []
}: AboutProps) {
  return (
    <section className="mx-auto max-w-6xl py-24 border-t border-brand/25">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-16">

        {/* LEFT: Image & Stats (Spans 5) */}
        <div className="md:col-span-5 flex flex-col gap-8">
          <AppImage
            src={imageSrc}
            alt="Eugene Mondreal"
            aspectRatio="square"
            imageClassName="rounded-xl shadow-2xl border-2 border-brand/10 grayscale hover:grayscale-0 transition-all duration-700"
          />

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 auto-rows-fr">
            {stats.map((stat, index) => (
              <StatCard
                key={stat.label}
                label={stat.label}
                value={stat.value}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>

        {/* RIGHT: Biography (Spans 7) */}
        <div className="md:col-span-7 flex flex-col gap-6">
          <div className="inline-block px-3 py-1 rounded-full bg-brand-highlight/10 text-brand text-xs font-bold uppercase tracking-tighter w-fit">
            My Journey
          </div>
          <Heading level="h2" className="text-4xl lg:text-5xl font-bold">
            {title}
          </Heading>
          <div className="prose prose-lg dark:prose-invert">
            <RichText content={content} className="text-lg leading-relaxed text-text" />
          </div>

          {/* Values / Interests */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-3 mt-4">
              {tags.map((tag) => (
                <span key={tag} className="rounded-full bg-brand-highlight px-3 py-1 text-sm font-semibold tracking-wide text-highlight">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
