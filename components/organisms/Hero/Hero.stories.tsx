import type { Meta, StoryObj } from "@storybook/react";
import Hero from "./Hero";

const meta = {
  title: "Organisms/Hero",
  component: Hero,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'padded',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Hero>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    themes: {
      default: "light",
    }
  },
  args: {
    title: "Hi, I'm a Web Developer 👋",
    subtitle: "Building clean, scalable and user-focused web applications.",
    name: "Eugene",
    location: "123 Main Street, Anytown, USA",
    age: 30,
    email: "contact@example.com",
    buttons: [
      { label: "View Projects", href: "/projects", variant: "primary" },
      { label: "Contact Me", href: "/contact", variant: "secondary" },
    ],
  },
};

export const NoButtons: Story = {
  args: {
    title: "Welcome to my Portfolio",
    subtitle: "Focusing on performance and clean architecture.",
    buttons: [],
  },
};

export const CustomContent: Story = {
  args: {
    title: "Modern Tech Stack",
    subtitle: "I specialize in React 19, Next.js 15, and Tailwind CSS v4.",
    buttons: [
      { label: "Get Started", variant: "primary", onClick: () => alert("Clicked!") },
    ],
  },
};
