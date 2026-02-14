/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      colors: {
        'midnight-violet': {
          50: '#f0eff6',
          100: '#e1dfec',
          200: '#c3beda',
          300: '#a59ec7',
          400: '#877db5',
          500: '#695da2',
          600: '#544a82',
          700: '#3f3861',
          800: '#2a2541',
          900: '#151320',
          950: '#0f0d17'
        },
        'slate-blue': {
          50: '#efedf8',
          100: '#dfdaf1',
          200: '#c0b5e3',
          300: '#a090d5',
          400: '#816bc7',
          500: '#6146b9',
          600: '#4e3894',
          700: '#3a2a6f',
          800: '#271c4a',
          900: '#130e25',
          950: '#0e0a1a'
        },
        'soft-periwinkle': {
          50: '#eeedf7',
          100: '#dedcef',
          200: '#bcb9df',
          300: '#9b95d0',
          400: '#7a72c0',
          500: '#594fb0',
          600: '#473f8d',
          700: '#352f6a',
          800: '#232046',
          900: '#121023',
          950: '#0c0b19'
        },
        'pale-slate': {
          50: '#f2f1f3',
          100: '#e6e3e8',
          200: '#cdc7d1',
          300: '#b4acb9',
          400: '#9b90a2',
          500: '#82748b',
          600: '#685d6f',
          700: '#4e4653',
          800: '#342e38',
          900: '#1a171c',
          950: '#121013'
        }
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif']
      }
    },
  },
  plugins: [],
}
