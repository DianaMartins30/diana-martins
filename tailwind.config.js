/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: '#7121D7',
        green: '#15DFBB',
        white: '#F5FFFD'
      },
      fontFamily: {
        'press-start': ['"Press Start 2P"', 'cursive'],
        'montserrat': ['"Montserrat"', 'sans-serif']
      }
    },
  },
  plugins: [],
}
