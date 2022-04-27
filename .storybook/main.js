module.exports = {
  stories: ["../stories/**/*.stories.mdx", "../stories/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    // Copied from my config
    '@storybook/addon-measure',
    '@storybook/addon-backgrounds',
    {
      name: '@storybook/addon-docs',
      options: {
        sourceLoaderOptions: {
          parser: 'typescript',
        },
      },
    },
    '@storybook/addon-actions',
    '@storybook/addon-controls',
    '@storybook/addon-toolbars',
    '@storybook/addon-viewport',
    '@storybook/addon-links',
    '@storybook/addon-a11y',
    'storybook-addon-designs',
    'storybook-addon-performance/register',


    // Old:
    "../preset.js"
  ],
}
