import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
export default withMT( {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
        'node_modules/flowbite-react/lib/esm/**/*.js'
    ],

    theme: {
        theme: {
            minWidth: {
                '1/2': '50%',
            },
        },
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
               mediumCoco: '#613F1B',
               grayBackground: '#DFE0DF',
               darkCoco: '#402E32'
            }
        },
    },

    plugins: [forms, require('flowbite/plugin')],
})
