/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: ".5rem",
      },
      maxWidth: {
        layout: "1500px",
      },
      backgroundColor: {
        primary: "#111827",
      },
    },
  },
  plugins: [],
};
