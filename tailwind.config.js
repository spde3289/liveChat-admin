// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "#191f2f",
        msg: "rgb(244, 244, 244)",
        hover: "#ececec",
        line: "#F3F3F4",
        customGray: "rgb(216, 220, 222)",
      },
    },
  },
  plugins: [],
};
