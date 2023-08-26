/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xl: '6rem',
      md: '2rem',
      sm:'1.3rem'
    },
    extend: {
      height: {
        '16': '5rem',
        '17':'9rem'
      },
      spacing: {
        '100v': '100vh',
       
      }
    },
  },
  plugins: [],
}