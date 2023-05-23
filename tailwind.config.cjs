/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      variants: {
        animation: ['motion-safe']
      },
      animation: {
        faddeIn: 'fadeIn 2s ease-in forwards'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        }
      },
      colors: {
        Linkedin: '#0e76a8'
      }
    }
  },
  plugins: []
}
