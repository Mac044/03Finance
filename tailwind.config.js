/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       backgroundImage: {
        'hero-pat': "url(/10/hero.png.jpg)"
       },
       fontFamily: {
        'inter': ['inter',]
       }
    },
  },
  plugins: [],
}

