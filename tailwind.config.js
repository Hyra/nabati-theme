/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./layout/*.liquid', './templates/*.liquid', './sections/*.liquid', './snippets/*.liquid'],
  theme: {
    extend: {
      fontFamily: {
        bannertype: ['BannerType2', 'sans-serif'],
        rubik: ['Rubik', 'sans-serif'],
        p22mackinac: ['p22_mackinac_probold', 'sans-serif'],
      },
      backgroundImage: {
        dotted: 'radial-gradient(circle, #471313 2px, transparent 2px)',
      },
      colors: {
        'nabati-pink': '#FD2B53',
        'peanut-brown': '#470101',
        'bamboo-beige': '#F1E3BC',
        'coconut-white': '#FFFFFF',
      },
      screens: {
        short: { raw: '(max-height: 650px)' },
      },
    },
  },
  plugins: [],
};
