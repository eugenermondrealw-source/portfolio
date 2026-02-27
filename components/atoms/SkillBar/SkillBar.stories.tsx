import type { Meta, StoryObj } from "@storybook/nextjs";
import SkillBar from "./SkillBar";

const meta = {
  title: "Atoms/SkillBar",
  component: SkillBar,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'padded',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: {
    // Adds a nice slider in the Storybook UI
    percentage: { 
      control: { type: 'range', min: 0, max: 100, step: 1 } 
    },
  },
} satisfies Meta<typeof SkillBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "Next.js",
    percentage: 70,
  },
};

export const HighProficiency: Story = {
  args: {
    name: "Tailwind CSS",
    percentage: 95,
  },
};
