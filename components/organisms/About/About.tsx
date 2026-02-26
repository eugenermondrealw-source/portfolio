import Heading from "../../atoms/Heading/Heading";
import RichText from "../../atoms/RichText/RichText";
import AppImage from "../../atoms/AppImage/AppImage";

interface AboutProps {
  title?: string;
  content: string;
  imageSrc?: string;
  stats?: { label: string; value: string }[];
}

export default function About({ 
  title = "About Me", 
  content, 
  imageSrc,
  stats = [] 
}: AboutProps) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 border-t border-brand/5">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* LEFT: Image & Stats (Spans 5) */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          <AppImage 
            src={imageSrc}
            alt="Eugene Mondreal"
            aspectRatio="square"
            imageClassName="rounded-xl shadow-2xl border-2 border-brand/10 grayscale hover:grayscale-0 transition-all duration-700"
          />
          
          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="p-4 rounded-2xl bg-surface border border-brand/5 text-center">
                <p className="text-2xl font-bold text-brand">{stat.value}</p>
                <p className="text-xs font-bold text-text uppercase tracking-widest mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: Biography (Spans 7) */}
        <div className="lg:col-span-7 flex flex-col gap-6">
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
          <div className="flex flex-wrap gap-3 mt-4">
            {["Clean Code", "User-Centric", "Fast Learner", "Problem Solver"].map((tag) => (
              <span key={tag} className="px-4 py-2 rounded-xl bg-brand-highlight border border-brand/10 text-sm font-medium text-highlight">
                {tag}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
