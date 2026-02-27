import type { Meta, StoryObj } from "@storybook/nextjs";
import Header from "./Header";

const meta = {
  title: "Organisms/Header",
  component: Header,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: "Maze",
    links: [{
      "label": "About",
      "href": "/about"
    }, {
      "label": "Projects",
      "href": "/projects"
    }, {
      "label": "asdasdas",
      "href": "/contact"
    }],
  },
};
