import type { StorybookConfig } from '@storybook/web-components-vite';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    {
      name: "@storybook/addon-docs",
      options: {
        mdxCompileOptions: {
          providerImportSource: "@storybook/addon-docs/mdx-react-shim",
        },
      },
    }
  ],
  "framework": "@storybook/web-components-vite"
};
export default config;