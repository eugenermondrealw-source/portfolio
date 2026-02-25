import type { StorybookConfig } from '@storybook/nextjs-vite';

const config: StorybookConfig = {
  "stories": [
    "../components/**/*.stories.@(ts|tsx)"
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs"
  ],
  "framework": "@storybook/nextjs-vite",
  "staticDirs": [
    "../public"
  ],
  viteFinal: async (config) => {
    config.build = {
      ...config.build,
      chunkSizeWarningLimit: 1000, // Silences the 500kb warning
      sourcemap: false,           // Silences the sourcemap warning
    };
    return config;
  },
};
export default config;