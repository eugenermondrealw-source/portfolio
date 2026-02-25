import ColorSwatch from "@/components/atoms/ColorSwatch/ColorSwatch";
import Hero from "@/components/organisms/Hero/Hero";

export default function Home() {
  return (
    <>
      <Hero
        title="Hi, I'm Eugene 👋"
        subtitle="Frontend Developer building clean, scalable and user-focused web applications."
        buttons={[
          { label: "View Projects", href: "portfolio/projects", variant: "primary" },
          { label: "Contact Me", href: "portfolio/contact", variant: "secondary" },
        ]}
      />
      <div className="flex flex-col gap-4 max-w-2xl mx-auto mt-12">
        <ColorSwatch variant="brand" name="Brand" className="text-surface dark:text-text" />
        <ColorSwatch variant="surface" name="Surface" className="text-text dark:text-surface" />
        <ColorSwatch variant="brand-soft" name="Brand Soft" className="text-text dark:text-surface" />
        <ColorSwatch variant="brand-highlight" name="Brand Highlight" className="text-text dark:text-surface" />
        <ColorSwatch variant="text" name="Text" className="text-surface dark:text-text" />
        <ColorSwatch variant="muted" name="Muted" className="text-surface dark:text-text" />
      </div>
    </>
  );
}
