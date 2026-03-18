import { Metadata } from "next";
import ProjectGrid from "@/components/organisms/ProjectGrid/ProjectGrid";

export const metadata: Metadata = {
  title: "Eugene | Frontend Developer Portfolio",
  description: "Frontend Developer specializing in React, Next.js, and Atomic Design. Explore my projects and professional experience.",
  alternates: { 
    canonical: "/projects" 
  },
};

export default function ProjectsPage() {
  return (
    <>
      <ProjectGrid
        title="Projects"
        projects={[
          {
            title: "E-Commerce Platform",
            description: "A full-scale online store built with Next.js 15 and Tailwind 4. Featuring real-time inventory and AI-driven recommendations.",
            imageSrc: "https://picsum.photos/id/654/300/170",
            tags: ["Next.js", "Tailwind", "PostgreSQL"],
            link: "#",
          },
          {
            title: "Quiz System",
            description: "A full-stack quiz management platform where admins and teachers can create, assign, and analyze quizzes, while students complete assigned quizzes and track their results.",
            imageSrc: "quizsystem_card_thumbnail.svg",
            tags: ["Next.js", "TypeScript", "Tailwind CSS"],
            link: "https://quizsystem-sooty.vercel.app/login",
          },
          {
            title: "Travel Journal",
            description: "My Travel Journal — A personal travel journal built with Next.js 15, React 19, and Tailwind CSS v4. Features a bento grid destinations page with real-time search and category filtering, individual destination pages with photo galleries and Google Maps embeds, a wishlist/explore page, and optional Storyblok CMS integration. Designed with a dark forest-green palette, WCAG AA accessible, and deployed on Vercel.",
            imageSrc: "travel_journal_thumbnail.svg",
            tags: ["Storyblok", "Next.js", "Tailwind", "Vercel"],
            link: "https://travel-portfolio-inky.vercel.app/",
          },
        ]}
      />
    </>
  );
}
