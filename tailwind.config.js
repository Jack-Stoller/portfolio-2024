/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'forest': {
        100: '#E4EAE0',
        200: '#C2D0B9',
        300: '#A8BA9C',
        400: '#90A88A',
        500: '#5B7859',
        600: '#415E3F',
        700: '#243F22',
        800: '#132811',
        900: '#091D07',
      },
    },
  },
  plugins: [],
}

