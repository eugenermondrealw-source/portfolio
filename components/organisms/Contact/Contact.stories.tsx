import type { Meta, StoryObj } from "@storybook/nextjs";
import { Mail, Github } from "lucide-react";
import Contact from "./Contact";

const meta = {
  title: "Organisms/Contact",
  component: Contact,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Contact>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Get in Touch",
    subtitle: "Feel free to reach out for collaborations or just a friendly hello!",
    socials: [
      {
        icon: <Mail size={20} />,
        platform: "Email",
        username: "contact@example.com",
        href: "mailto:contact@example.com",
      },
      {
        icon: <Github size={20} />,
        platform: "GitHub",
        username: "eugenermondrealw-source",
        href: "https://github.com",
      }
    ],
  },
};
