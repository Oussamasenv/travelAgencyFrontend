/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        '110': '29rem'
      }
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),],
}

