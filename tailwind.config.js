/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        maytra: ['Maytra', 'Montserrat', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
