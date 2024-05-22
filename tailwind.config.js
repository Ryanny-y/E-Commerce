/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "*.{html,js}",
    'pages/*.{html, js}',
    'scripts/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        'p-red': '#DB4444',
        'lime': '#00FF66'
      },
      spacing: {
        '85': '22rem',
        '3\/5' : '60%',
        '2\/5' : '40%',
      }
    },
  },
  plugins: [],
}

