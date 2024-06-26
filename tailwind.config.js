/** @type {import('tailwindcss').Config} */
import { PiNumberCircleThreeThin } from "react-icons/pi";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       backgroundImage: {
        'hero-pat': "url(/10/hero.png.jpg)",
        'hero-pat2': "url(/17/Vector.jpg)",
        'hero-pat3': "url(/18/circle.jpg)",
        'hero-pat4' : "url(/19/communities.jpg)"
       },

      container: {
      maxWidth: {
        md: '934px'
      }
      }
    },
  },
  plugins: [],
}

