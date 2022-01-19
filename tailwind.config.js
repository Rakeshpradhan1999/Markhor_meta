module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
        screens: {
          lg: "1140px",
          xl: "1140px",
          "2xl": "1400px",
        },
      },
      fontFamily: {
        sans: ["PT Sans", "sans-serif"],
        serif: ["Roboto", "sans-serif"],
      },
      colors: {
        blue: {
          DEFAULT: "#566FFE",
        },
        primary: {
          400: "#E5FDF0",
        },
        secondary: {
          400: "#F6F2E5",
        },
      },
    },
  },
  plugins: [],
};
