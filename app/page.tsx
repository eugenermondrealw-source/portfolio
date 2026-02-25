import ColorSwatch from "@/components/atoms/ColorSwatch/ColorSwatch";
import ProjectCard from "@/components/molecules/ProjectCard/ProjectCard";
import Hero from "@/components/organisms/Hero/Hero";
import ProjectGrid from "@/components/organisms/ProjectGrid/ProjectGrid";
import Skills from "@/components/organisms/Skills/Skills";

export default function Home() {
  return (
    <>
      <Hero
        title="Hi, I'm a Web Developer"
        subtitle="Building clean, scalable and user-focused web applications."
        name="Eugene"
        location="123 Main Street, Anytown, USA"
        age={30}
        email="contact@example.com"
        buttons={[
          { label: "View Projects", href: "/projects", variant: "primary" },
          { label: "Contact Me", href: "/contact", variant: "secondary" },
        ]}
      />

      <Skills
        title="Technical Proficiency"
        skills={[
          { name: "Next.js", percentage: 60 },
          { name: "Tailwind CSS", percentage: 75 },
          { name: "React", percentage: 50 },
          { name: "TypeScript", percentage: 50 },
          { name: "Storybook", percentage: 70 },
          { name: "Git & GitHub", percentage: 75 },
          { name: "Node.js", percentage: 50 },
          { name: "AI Prompting", percentage: 95 },
          { name: "Wordpress", percentage: 65 },
          { name: "Hubspot CMS", percentage: 65 },
        ]}
      />

      <ProjectGrid
        title="Featured Projects"
        projects={[
          {
            title: "E-Commerce Platform",
            description: "A full-scale online store built with Next.js 15 and Tailwind 4. Featuring real-time inventory and AI-driven recommendations.",
            imageSrc: "",
            tags: ["Next.js", "Tailwind", "PostgreSQL"],
            link: "#",
          },
          {
            title: "AI Dashboard",
            description: "Monitoring tool for LLM performance. Includes dark mode support and real-time data visualization.",
            imageSrc: "",
            tags: ["React", "TypeScript", "AI"],
            link: "#",
          },
          {
            title: "Creative Portfolio",
            description: "A minimalist approach to showing creative work. Focused on performance and smooth page transitions.",
            imageSrc: "",
            tags: ["Storybook", "Framer Motion"],
            link: "#",
          },
        ]}
      />

      <section className="flex flex-col gap-4 max-w-2xl mx-auto mt-12">
        <ColorSwatch variant="brand" name="Brand" className="text-surface dark:text-text" />
        <ColorSwatch variant="surface" name="Surface" className="text-text dark:text-surface" />
        <ColorSwatch variant="brand-soft" name="Brand Soft" className="text-text dark:text-surface" />
        <ColorSwatch variant="brand-highlight" name="Brand Highlight" className="text-text dark:text-surface" />
        <ColorSwatch variant="text" name="Text" className="text-surface dark:text-text" />
        <ColorSwatch variant="muted" name="Muted" className="text-surface dark:text-text" />
      </section>

    </>
  );
}
