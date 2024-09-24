/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    extend: {
      colors: {
        'text_primary': '#091133',
        'bg_primary': '#111B47',
        'text_secondery': '#505F98',
      },
      fontFamily: {
        'roboto': ['roboto','sans-serif'],
      },
      backgroundImage: {
        'hero-bg': "url('../img/hero_bg.png')",
        'last_bg': "url('../img/last_bg.png')",
      }
    },
  },
  plugins: [],
}

