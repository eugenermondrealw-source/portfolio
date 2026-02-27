import type { Meta, StoryObj } from "@storybook/nextjs";
import Heading from "./Heading";

const meta = {
  title: "Atoms/Heading",
  component: Heading,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Heading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const H1: Story = {
  args: {
    level: "h1",
    children: "This is an H1 Heading",
  },
};

export const H2: Story = {
  args: {
    level: "h2",
    children: "This is an H2 Heading",
  },
};

export const H3: Story = {
  args: {
    level: "h3",
    children: "This is an H3 Heading",
  },
};

export const H4: Story = {
  args: {
    level: "h4",
    children: "This is an H4 Heading",
  },
};

export const H5: Story = {
  args: {
    level: "h5",
    children: "This is an H5 Heading",
  },
};

export const H6: Story = {
  args: {
    level: "h6",
    children: "This is an H6 Heading",
  },
};