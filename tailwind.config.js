/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkSlateGray: "#19535F",
        pineGreen: "#0B7A75",
        darkVanilla: "#D7C9AA",
        burntUmber: "#7B2D26",
        lotion: "#FAFAFA",
      },
    },
  },
  plugins: [],
};
