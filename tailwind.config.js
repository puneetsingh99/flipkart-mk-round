module.exports = {
  purge: ["./src/**/*.jsx"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: "#0C4AB0",
      },
      width: {
        150: "150px",
        200: "200px",
      },
      height: {
        200: "200px",
        300: "300px",
        350: "350px",
        400: "400px",
      },
      gridTemplateColumns: {
        15: "1.5fr 6fr",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
