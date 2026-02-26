import type { Meta, StoryObj } from "@storybook/react";
import ExperienceItem from "./ExperienceItem";

const meta = {
  title: "Molecules/ExperienceItem",
  component: ExperienceItem,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof ExperienceItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    company: "Tech Solutions Inc.",
    role: "Senior Frontend Developer",
    duration: "2021 — PRESENT",
    description: [
      "Developed and maintained scalable web applications using React and Next.js.",
      "Collaborated with cross-functional teams to define, design, and ship new features.",
      "Optimized application performance resulting in a 40% reduction in load times."
    ],
  },
};

export const LongDescription: Story = {
  args: {
    company: "Creative Studio",
    role: "UI/UX Developer",
    duration: "2018 — 2021",
    description: [
      "Led the frontend architecture for a high-traffic e-commerce platform.",
      "This is a long bullet point intended to test the vertical alignment of the custom dot icon when the text wraps onto multiple lines to ensure it stays at the top.",
      "Mentored junior developers and established internal coding standards."
    ],
  },
};

export const ShortEntry: Story = {
  args: {
    company: "Startup Hub",
    role: "Freelance Developer",
    duration: "2017 — 2018",
    description: [
      "Built MVP for a fintech startup using TypeScript."
    ],
  },
};
