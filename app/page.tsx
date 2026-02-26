import Hero from "@/components/organisms/Hero/Hero";
import About from "@/components/organisms/About/About";
import Skills from "@/components/organisms/Skills/Skills";
import ProjectGrid from "@/components/organisms/ProjectGrid/ProjectGrid";
import Contact from "@/components/organisms/Contact/Contact";
import { Github, Linkedin, Mail } from "lucide-react";
import Experience from "@/components/organisms/Experience/Experience";

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

      <About 
        imageSrc=""
        title="Crafting Digital Experiences"
        content="I am a Frontend Developer based in Pangasinan. My journey started with a curiosity for how the web works, leading me to learn modern tools like Next.js and Tailwind CSS. <br /><br /> I specialize in building highly interactive, accessible, and performant web applications using AI-driven workflows to accelerate development without sacrificing code quality."
        stats={[
          { label: "Experience", value: "2+ Years" },
          { label: "Projects", value: "15+" },
        ]}
      />

      <Experience 
        title="Work Experience"
        items={[
          {
            company: "Tech Solutions Inc.",
            role: "Frontend Developer",
            duration: "Jan 2024 - Present",
            description: [
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
              "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
              "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            ]
          },
          {
            company: "Creative Web Studio",
            role: "Web Developer",
            duration: "June 2022 - Dec 2023",
            description: [
              "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            ]
          }
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

      <Contact
        title="Let's Connect"
        subtitle="Have a project in mind? Reach out and let's build something amazing together."
        socials={[
          { 
            icon: <Mail size={20} />, 
            platform: "Email", 
            username: "eugenermondrealw@email.com", 
            href: "mailto:eugenermondrealw@email.com" 
          },
          { 
            icon: <Github size={20} />, 
            platform: "GitHub", 
            username: "eugenermondrealw-source", 
            href: "https://github.com" 
          },
          { 
            icon: <Linkedin size={20} />, 
            platform: "LinkedIn", 
            username: "Eugene Mondreal", 
            href: "https://linkedin.com" 
          },
        ]}
      />

    </>
  );
}
