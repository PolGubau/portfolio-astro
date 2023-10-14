/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#e7edf4",
          dark: "#1F1F1F",
        },
      },
    },
  },
  plugins: [],
};
