/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0C090D",
        secondary: "#14BB00",
      },
      fontFamily: {
        Lato: ["Lato", "sans-serif"],
        Handjet:["Handjet","serif"]
      },
    },
  },
  plugins: [],
};
