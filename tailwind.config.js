/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    backgroundColor: {
      'our-bg': '#FFF8E8',
      'our-black': 'black',
    }
  },
  plugins: [],
  darkMode: 'class',
}