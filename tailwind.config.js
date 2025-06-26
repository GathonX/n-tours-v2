/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#FFF9E6',    // jaune très pâle
          DEFAULT: '#FFD700',  // jaune soleil
          dark: '#E6C200',     // hover/états actifs
        },
        secondary: {
          light: '#E0FBFC',    // bleu plage pâle
          DEFAULT: '#00B4D8',  // bleu océan
          dark: '#0077B6',     // bleu profond
        },
        background: {
          DEFAULT: '#FFFFFF',  // blanc journée
          alt: '#F0F8FF',      // blanc bleuté
        },
        text: {
          primary: '#002855',  // bleu nuit
          secondary: '#005B96',// bleu intermédiaire
        },
        accent: '#F7D294',     // sable doré
        border: '#C5D5E0',     // gris doux pour séparateurs
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}