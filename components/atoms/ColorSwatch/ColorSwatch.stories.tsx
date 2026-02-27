import type { Meta, StoryObj } from "@storybook/nextjs";
import ColorSwatch from "./ColorSwatch";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Atoms/ColorSwatch",
  component: ColorSwatch,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "padded",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof ColorSwatch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Surface: Story = {
  args: {
    name: "Surface",
    variant: "surface",
  },
};

export const Muted: Story = {
  args: {
    name: "Muted",
    variant: "muted",
  },
};

export const Text: Story = {
  args: {
    name: "Text",
    variant: "text",
  },
};

export const Brand: Story = {
  args: {
    name: "Brand",
    variant: "brand",
  },
};

export const BrandSoft: Story = {
  args: {
    name: "Brand Soft",
    variant: "brand-soft",
  },
};

export const BrandHighlight: Story = {
  args: {
    name: "Brand Highlight",
    variant: "brand-highlight",
  },
};