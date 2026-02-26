import type { Meta, StoryObj } from "@storybook/react";
import { Github, Mail, Linkedin, Twitter } from "lucide-react";
import SocialLink from "./SocialLink";

const meta = {
  title: "Atoms/SocialLink",
  component: SocialLink,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  // Optional: Define controls for the platform and username
  argTypes: {
    platform: { control: "text" },
    username: { control: "text" },
  },
} satisfies Meta<typeof SocialLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const GitHub: Story = {
  args: {
    icon: <Github size={20} />,
    platform: "GitHub",
    username: "eugenermondrealw-source",
    href: "https://github.com",
  },
};

export const Email: Story = {
  args: {
    icon: <Mail size={20} />,
    platform: "Email",
    username: "contact@example.com",
    href: "mailto:contact@example.com",
  },
};

export const LinkedIn: Story = {
  args: {
    icon: <Linkedin size={20} />,
    platform: "LinkedIn",
    username: "Eugene Mondreal",
    href: "https://linkedin.com",
  },
};
