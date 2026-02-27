import type { Meta, StoryObj } from "@storybook/nextjs";
import About from "./About";

const meta = {
  title: "Organisms/About",
  component: About,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
} satisfies Meta<typeof About>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "About Me",
    content: "This is where my story goes. I love building things with React.",
    imageSrc: "",
    stats: [
      { label: "Coffee Consumed", value: "∞" },
      { label: "Bugs Squashed", value: "999+" }
    ]
  }
};
