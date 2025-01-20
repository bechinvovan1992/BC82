/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      spacing: {
        '90-screen': '90vh',
      },
      colors:{
        "mauxanh": "#5D8736"
      }
    },
  },
  plugins: [],
}