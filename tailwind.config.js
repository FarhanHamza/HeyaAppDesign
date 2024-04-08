/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/*.html"],
  theme: {
    extend: {
      colors: {
        grape : "rgba(var(--grape))",
        primary: {
          default: "#183B56",
          light: "#5A7184",
        },
        secondary: {
          default: "#1565D8",
          defaultLight: "#5A7184", // light
          light: "#EAF7F1",
          dark: "#0938C3",
          midDark: "#959EAD", // light 2
        },
        blue: {
          light: "#85d7ff",
          DEFAULT: "#1fb6ff",
          dark: "#009eeb",
        },
        pink: {
          light: "#ff7ce5",
          DEFAULT: "#ff49db",
          dark: "#ff16d1",
        },
        gray: {
          darkest: "#1f2d3d",
          dark: "#3c4858",
          DEFAULT: "#c0ccda",
          light: "#e0e6ed",
          lightest: "#f9fafc",
        },
      },
      fontFamily: {
        montserrat: ["Montserrat"],
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
