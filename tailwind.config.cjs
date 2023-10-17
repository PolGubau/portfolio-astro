/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#e7edf4",
          dark: "#1e1e1e",
        },
        primary: {
          DEFAULT: "#c8eeff",
          dark: "#5dccfe",
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
