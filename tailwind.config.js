module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    screens: {
      sm: { max: "375px" },
      // => @media (max-width: 375px) { ... }

      md: { max: "640px" },
      // => @media (max-width: 640px) { ... }

      lg: { max: "1100px" },
      // => @media (max-width: 1100px) { ... }

      xl: { max: "1400px" },
      // => @media (max-width: 1400px) { ... }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
