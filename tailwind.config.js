module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    screens: {
      sm: { max: '475px' },

      md: { max: '900px' },

      lg: { max: '1100px' },

      xl: { max: '1400px' },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
