/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      colors: {
        'blue': '#3294F8',
        'base-profile': '#0B1B2B',
        'base-background': '#071422',
        'base-span': '#7B96B2',
        'base-input': '#040F1A',
        'base-subtitle': '#C4D4E3',
        'base-title': '#E7EDF4',
        'base-border': '#1C2F41',
        'base-label': '#3A536B',
        'base-post': '#112131',
        'base-text': '#AFC2D4',
      },
      fontFamily: {
        sans: ['Nunito', 'sans-serif']
      }
    },
  },
  plugins: [],
}