import type { Meta, StoryObj } from "@storybook/nextjs";
import RichText from "./RichText";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Atoms/RichText",
  component: RichText,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: {
    content: { 
      control: "text",
      description: "Supports raw HTML strings like <strong> or <em>" 
    },
    as: { control: "select", options: ["p", "span", "div"] },
  },
} satisfies Meta<typeof RichText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HTMLDemo: Story = {
  args: {
    // Typing this in the Storybook UI will now render properly
    content: "Edit <u>this</u> <strong>HTML</strong> in the controls!",
    className: "color-red",
  },
};