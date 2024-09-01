/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
        colors: {
          'primary': '#3490dc',
          'correct': '#ffed4a',
          'incorrect': '#e3342f',
        }
    },
  },
  plugins: [],
}

