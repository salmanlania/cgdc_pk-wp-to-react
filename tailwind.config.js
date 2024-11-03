/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        jost: ['jost', 'sans-serif'],
        arimo: ['Arimo', 'sans-serif'],
      },
    },
  },
  plugins: [],
}