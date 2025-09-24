/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#0057b7', // A strong, professional blue
        'brand-lightblue': '#e6f0ff', // A very light blue for backgrounds
        'brand-dark': '#222222', // A soft black for text
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
