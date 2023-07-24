/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      screens: {
        hp: "400px",
        tablet: "640px",

        laptop: "1024px",

        desktop: "1280px",
      },
    },
  },
  plugins: [],
};
