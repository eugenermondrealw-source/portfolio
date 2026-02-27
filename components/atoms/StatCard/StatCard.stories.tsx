import type { Meta, StoryObj } from '@storybook/react';
import StatCard from './StatCard';

const meta = {
  title: 'Atoms/StatCard',
  component: StatCard,
  parameters: {
    // Optional parameter to center the component in the Canvas.
    layout: 'centered',
  },
  argTypes: {
    value: { control: 'text' },
    label: { control: 'text' },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof StatCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// Primary state matching your current look
export const Default: Story = {
  args: {
    value: '2+ Years',
    label: 'Experience',
  },
};

// Example for Projects
export const Projects: Story = {
  args: {
    value: '15+',
    label: 'Projects Completed',
  },
};

// Grid View (to test how multiple look together)
export const GridView: Story = {
  // Add this line to satisfy TypeScript
  args: {
    value: '',
    label: '',
  },
  render: () => (
    <div className="grid grid-cols-2 gap-4 w-[400px]">
      <StatCard value="2+ Years" label="Experience" />
      <StatCard value="15+" label="Projects" />
      <StatCard value="10k" label="Lines of Code" />
      <StatCard value="100%" label="Satisfied Clients" />
    </div>
  ),
};
