/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xl: '6rem',
      md:'2rem'
    },
    extend: {
      spacing: {
        '100v': '100vh',
      }
    },
  },
  plugins: [],
}