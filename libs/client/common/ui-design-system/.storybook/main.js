const config = {
    stories: ['../src/lib/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
    addons: [
        '@storybook/addon-essentials',
        '@storybook/addon-links',
        '@storybook/addon-styling',
        '@storybook/addon-a11y',
    ],
    framework: {
        name: '@storybook/react-vite',
        options: {
            builder: {
                viteConfigPath:
                    'libs/client/common/ui-design-system/vite.config.ts',
            },
        },
    },
};

export default config;