import type { Meta, StoryObj } from "@storybook/react";
import Skills from "./Skills";

const meta = {
  title: "Organisms/Skills",
  component: Skills,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Skills>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Technical Proficiency",
    skills: [
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
    ],
  },
};
