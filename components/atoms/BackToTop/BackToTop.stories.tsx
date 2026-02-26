import type { Meta, StoryObj } from "@storybook/react";
import BackToTop from "./BackToTop";

const meta = {
  title: "Atoms/BackToTop",
  component: BackToTop,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div style={{ height: "300vh" }}>
        <div className="p-10 sticky top-0 text-muted">
          <p className="font-bold">2026 Scroll Progress Test</p>
          <p className="text-sm italic">Scroll down to see the ring fill up...</p>
        </div>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof BackToTop>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ProgressRing: Story = {};
