import { Metadata } from "next";
import Hero from "@/components/organisms/Hero/Hero";
import Experience from "@/components/organisms/Experience/Experience";

export const metadata: Metadata = {
  title: "About Me",
  description: "Learn about my journey and technical skills in web development.",
  alternates: {
    canonical: "/about"
  },
};

export default function AboutPage() {
  return (
    <>
      <Hero
        title="Hi, I'm a Web Developer"
        subtitle="Building clean, scalable and user-focused web applications."
        name="Eugene"
        location="123 Main Street, Anytown, USA"
        age={32}
        email="contact@example.com"
        imageSrc="https://picsum.photos/id/30/300/300"
        imageAlt="Profile Picture"
      />

      <Experience
        title="Side Project / Portfolio"
        items={[
          {
            company: "Self-Directed Learning",
            role: "Personal Project",
            duration: "Nov 2023 - Present",
            description: [
              "Architected a clean, scalable codebase using Next.js (App Router) and TypeScript for strict type safety.",
              "Documented a custom Atomic Design system within Storybook 10 to manage UI components in isolation.",
              "Styled a modern, high-performance interface using Tailwind CSS with a focus on CSS-native variables.",
              "Optimized project workflows using pnpm for fast installs and Node.js for the latest runtime features.",
              "Automated deployment and testing pipelines with GitHub Actions for a seamless CI/CD experience.",
              "Implemented dark mode and theme switching using next-themes and Lucide React icons."
            ]
          }
        ]}
      />
    </>
  );
}
