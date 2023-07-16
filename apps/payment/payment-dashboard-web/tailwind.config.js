const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        join(
            __dirname,
            '{src,pages,components,app}/**/*!(*.stories|*.spec).{js,jsx,html}'
        ),
        ...createGlobPatternsForDependencies(__dirname),
    ],
    theme: {
        extend: {
            keyframes: {
                rippleAni: {
                    '0%, 100%': { transform: 'translate(0px, 0px)' },
                    '33%': { transform: 'translate(5px, -5px)' },
                    '66%': { transform: 'translate(-5px, 5px)' },
                },
                ripple2Ani: {
                    '0%, 100%': { transform: 'translate(0px, 0px)' },
                    '33%': { transform: 'translate(-5px, -5px)' },
                    '66%': { transform: 'translate(5px, 5px)' },
                },
            },
            animation: {
                ripple: 'rippleAni 3s linear infinite',
                ripple2: 'ripple2Ani 4s linear infinite',
            },
        },
    },
    plugins: [require('@tailwindcss/forms'), require('tailwind-scrollbar')],
};
