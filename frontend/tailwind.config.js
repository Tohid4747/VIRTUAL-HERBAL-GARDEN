/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: '#1B4332',
        sage: '#74A57F',
        turmeric: '#D9A441',
        parchment: '#F3F1E7',
      },
      fontFamily: {
        display: ['Fraunces', 'Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}