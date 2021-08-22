const plugin = require('tailwindcss/plugin');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['EBGaramond', 'Arial'],
      'korean-sans': ['Korean-EBGaramond', 'Arial'],
      serif: ['OpenSans', 'sans-serif'],
      'korean-serif': ['Korean-OpenSans', 'sans-serif'],
    },
    extend: {
      colors: {
        'theme-blue': '#3B5284',
        'theme-teal': '#5BA8A0',
        'theme-yellow': '#CBE54E',
        'theme-white': '#F8F8F8',
        'theme-black': {
          light: '#3F3F3F',
          dark: '#282828',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        'input:checked ~ .dot': {
          transform: 'translateX(100%)',
        },
      };

      addUtilities(newUtilities);
    }),
  ],
};
