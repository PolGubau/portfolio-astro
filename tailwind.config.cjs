/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        background: {
          DEFAULT: "#e7edf4",
          dark: "#1e1e1e",
        },
        primary: {
          DEFAULT: "#ffff60",
          dark: "#ff1",
        },
        accent: {
          DEFAULT: "#ff4",
          dark: "#bb5",
        },
      },
    },
  },
  plugins: [],
};
