/** @type {import('tailwindcss').Config} */
module.exports = {
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
          dark: "#c8eeff",
        },
        accent: {
          DEFAULT: "#ff4",
          dark: "#ff4",
        },
      },
    },
  },
  plugins: [],
};
