/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
        work: ["Work Sans", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        monse: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
