import Hero from "@/components/organisms/Hero/Hero";

export default function AboutPage() {
  return (
    <>
      <Hero
        title="About Me"
        subtitle={
          <>
            <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">
              I’m a frontend developer passionate about building intuitive, high-quality web experiences.
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed mt-2">
              I love working with React, Next.js, and TailwindCSS to create scalable applications.
            </p>
          </>
        }
      />
    </>
  );
}
