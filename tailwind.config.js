/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  // theme: {
  //   extend: {},
  // },
  // plugins: [],
  theme: {
    extend: {
      perspective: {
        '600': '600px',
      },
      transformStyle: {
        'preserve-3d': 'preserve-3d',
      },
      transformOrigin: {
        'center-right': 'center right',
      },
      backfaceVisibility: {
        'hidden': 'hidden',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.transform-style-preserve-3d': {
          transformStyle: 'preserve-3d',
        },
        '.transform-origin-center-right': {
          transformOrigin: 'center right',
        },
        '.backface-hidden': {
          backfaceVisibility: 'hidden',
        },
      });
    },
  ],
}

