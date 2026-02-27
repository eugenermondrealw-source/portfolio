import { Metadata } from "next";
import Hero from "@/components/organisms/Hero/Hero";
import About from "@/components/organisms/About/About";
import Skills from "@/components/organisms/Skills/Skills";
import ProjectGrid from "@/components/organisms/ProjectGrid/ProjectGrid";
import Contact from "@/components/organisms/Contact/Contact";
import { Github, Linkedin, Mail } from "lucide-react";
import Experience from "@/components/organisms/Experience/Experience";

export const metadata: Metadata = {
  title: "Eugene | Frontend Developer Portfolio",
  description: "Frontend Developer specializing in React, Next.js, and Atomic Design. Explore my projects and professional experience.",
  alternates: { 
    canonical: "/about" 
  },
};

export default function Home() {
  return (
    <>
      <Hero
        title="Hi, I'm a Web Developer"
        subtitle="Building clean, scalable and user-focused web applications."
        name="Eugene Mondreal"
        location="Aguilar, Pangasinan, PH"
        age={32}
        email="contact@example.com"
        buttons={[
          { label: "View Projects", href: "/projects", variant: "primary" },
          { label: "Contact Me", href: "/contact", variant: "secondary" },
        ]}
        imageSrc="https://picsum.photos/id/91/300/300"
        imageAlt="Profile Picture"
      />

      <About 
        imageSrc="https://picsum.photos/id/860/350/350"
        title="Crafting Digital Experiences"
        content="I am a Frontend Developer based in Pangasinan. My journey started with a curiosity for how the web works, leading me to learn modern tools like Next.js and Tailwind CSS. <br /><br /> I specialize in building highly interactive, accessible, and performant web applications using AI-driven workflows to accelerate development without sacrificing code quality."
        stats={[
          { label: "Experience", value: "5+ Years" },
          { label: "Projects", value: "15+" },
        ]}
        tags={["React", "Next.js", "Tailwind CSS", "TypeScript", "AI"]}
      />

      <Experience 
        title="Work Experience"
        items={[
          {
            company: "2x Philippines",
            role: "Frontend Developer",
            duration: "Nov 2023 - Present",
            description: [
              "Assisted in building basic UI components using Svelte and SvelteKit under senior supervision.",
              "Learned to manage and update content structures within the Sitecore XM Cloud environment.",
              "Documented and tested isolated UI elements using Storybook to ensure design consistency.",
              "Fixed minor styling bugs and updated site copy across various enterprise landing pages."
            ]
          },
          {
            company: "StraightArrow Corporation",
            role: "Frontend Developer",
            duration: "2018 – Oct 2023",
            description: [
              "Developed and maintained custom WordPress themes and layouts using Elementor and Advanced Custom Fields (ACF).",
              "Built high-converting landing pages and automated email workflows within the HubSpot CMS.",
              "Customized Shopify storefronts using Liquid to enhance user experience and site functionality.",
              "Managed website updates, plugin configurations, and speed optimizations for diverse client projects."
            ]
          },
          {
            company: "StraightArrow Corporation",
            role: "Email Developer",
            duration: "2016 – 2018",
            description: [
              "Designed and coded responsive HTML/CSS email templates compatible with HubSpot and Mailchimp.",
              "Executed A/B testing and optimized email assets to ensure fast loading across mobile and desktop.",
              "Built reusable email modules to streamline the production of weekly marketing newsletters.",
              "Resolved rendering issues for complex layouts in legacy clients like Outlook."
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
            imageSrc: "https://picsum.photos/id/654/300/170",
            tags: ["Next.js", "Tailwind", "PostgreSQL"],
            link: "#",
          },
          {
            title: "AI Dashboard",
            description: "Monitoring tool for LLM performance. Includes dark mode support and real-time data visualization.",
            imageSrc: "https://picsum.photos/id/1065/300/170",
            tags: ["React", "TypeScript", "AI"],
            link: "#",
          },
          {
            title: "Creative Portfolio",
            description: "A minimalist approach to showing creative work. Focused on performance and smooth page transitions.",
            imageSrc: "https://picsum.photos/id/743/300/170",
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
