/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        textBlack: '#242429',
        textLight: '#878799',
        textDarkt: '#636370',
        fillLightBgLightContr: '#F5F5FA',
        fillButtonAccentDefault: '#7A7ACC',
        fillTableHead: '#E1E1F5',
        fillTableRow: '#F0F0FA',
        fillTableRow2: '#F5F5FA',
        fillTableStrokeTableHead: '#dcdcfa',
        fillTableStrokeTableRow: '#E6E6FA',

        fillLinkRest: '#878799',
        fillLinkHover: '#5C5C99',
        fillLinkActive: '#4D4D99',
      },
    },
  },
  plugins: [],
};
