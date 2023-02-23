/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}','./public/index.html'],
  theme: {
    screens: {
      'tablet': '481px',
      'pc': '769px',
    },
    extend: {},
  },
  plugins: [],
}
