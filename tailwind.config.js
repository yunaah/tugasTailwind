/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./style/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'accent': '#46A358',
        'better': '#3D3D3D',
        'jungle': '#727272',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}

