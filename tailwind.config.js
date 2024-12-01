const colors = {
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
};


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: colors,
      borderRadius: {
        DEFAULT: '8px',
      },
      boxShadow: {
        DEFAULT: `0 0 20px 7px ${colors.forest[800]}50`,
        hard: `2px 2px 20px 7px ${colors.forest[800]}50, 4px 4px 0 ${colors.forest[800]}`,
      },
      backgroundImage: {
        'site': `url('/images/noise.png'), radial-gradient(at 40% 5%, ${colors.forest[200]},  ${colors.forest[400]} 80%)`,
      },
      gridTemplateColumns: {
        'page': '400px minmax(0, 1fr)',
      }
    },
    
  },
  plugins: [],
}

