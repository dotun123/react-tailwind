/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "neutralSilver":"#F5F7A",
        "neutralDGrey":"#4DAD4D",
        "brandPrimary":"#4CAF4F",
        "neutralGrey":"#717171",
      }
    },
  },
  plugins: [],
}