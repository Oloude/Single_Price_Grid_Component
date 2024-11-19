/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Karla": ['"Karla"', ...defaultTheme.fontFamily.sans],
      },
      colors : {
        "cyan" : "#2ab2af",
        "yellow" : "#c0df34",
        "gray" : "#e5eff5",
        "blue" : "#98a6bd",
      }
    },
  },
  plugins: [],
}