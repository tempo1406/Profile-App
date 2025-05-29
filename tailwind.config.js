/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        // Pastel color palette
        blue: {
          50: '#f0f5ff',
          ...require('tailwindcss/colors').blue
        },
        pink: {
          50: '#fff0f6',
          ...require('tailwindcss/colors').pink
        },
        purple: {
          50: '#f9e6ff',
          100: '#f3d5fe',
          200: '#e9b2fd',
          300: '#d57efc',
          400: '#c44ef9',
          500: '#a931f3',
          600: '#9322d6',
          700: '#781cad',
          800: '#5f1a8c',
          900: '#4e1973',
        }
      }
    },
  },
  plugins: [],
};