import type { Meta, StoryObj } from "@storybook/react";
import Experience from "./Experience";

const meta = {
  title: "Organisms/Experience",
  component: Experience,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
} satisfies Meta<typeof Experience>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Work Experience",
    items: [
      {
        company: "Tech Solutions Inc.",
        role: "Senior Frontend Developer",
        duration: "2021 — PRESENT",
        description: [
          "Developed and maintained scalable web applications using React and Next.js.",
          "Collaborated with cross-functional teams to define, design, and ship new features.",
          "Optimized application performance resulting in a 40% reduction in load times.",
        ],
      },
      {
        company: "Creative Studio",
        role: "UI/UX Developer",
        duration: "2018 — 2021",
        description: [
          "Led the frontend architecture for a high-traffic e-commerce platform.",
          "This is a long bullet point intended to test the vertical alignment of the custom dot icon when the text wraps onto multiple lines.",
          "Mentored junior developers and established internal coding standards.",
        ],
      },
      {
        company: "Startup Hub",
        role: "Junior Web Developer",
        duration: "2016 — 2018",
        description: [
          "Assisted in the development of various client websites using HTML, CSS, and JavaScript.",
          "Gained hands-on experience with modern frontend frameworks and libraries.",
        ],
      },
    ],
  },
};

export const SingleEntry: Story = {
  args: {
    title: "Education",
    items: [
      {
        company: "University of Technology",
        role: "B.S. in Computer Science",
        duration: "2012 — 2016",
        description: [
          "Specialized in Software Engineering and Data Structures.",
          "Graduated with Honors.",
        ],
      },
    ],
  },
};
