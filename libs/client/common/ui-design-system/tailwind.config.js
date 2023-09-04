const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');
const withMT = require('@material-tailwind/react/utils/withMT');

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
    content: [
        join(
            __dirname,
            '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}',
        ),
        ...createGlobPatternsForDependencies(__dirname),
        '../../../../node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}',
        '../../../../node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: ['class', '[data-mode="dark"]'],
    theme: {
        fontFamily: {
            sans: ['Open Sans', 'sans-serif'],
        },
        boxShadow: {
            sm: '0 2px 4px 0 rgb(0 0 0 / 0.05)',
        },
        colors: {
            primary: '#1976d2',
            secondary: '#00796b',
            warning: '#ffeb3b',
        },
        extend: {},
    },
    plugins: [],
});
