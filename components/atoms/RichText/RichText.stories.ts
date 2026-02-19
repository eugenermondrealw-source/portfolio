import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import RichText from "./RichText";

const meta = {
  title: "Atoms/RichText",
  component: RichText,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    content: {
      control: 'text',
      description: 'Markdown or HTML content for the component',
    },
  },
} satisfies Meta<typeof RichText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: `
      <h1>Main Heading</h1>
      <p>This is a paragraph with <strong>bold</strong> text.</p>
      <p>You can even add <a href="#">links</a> here.</p>
    `,
  },
};