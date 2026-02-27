import type { Meta, StoryObj } from "@storybook/nextjs";
import AppImage from "./AppImage";

const meta = {
  title: "Atoms/AppImage",
  component: AppImage,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof AppImage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: "",
    alt: "Developer Setup",
    width: 600,
    height: 400,
    imageClassName: "",
  },
};
