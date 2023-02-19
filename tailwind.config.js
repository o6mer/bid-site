/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FCDEC0",
        secondary: "#E5B299",
        third: "#B4846C",
        fourth: "#7D5A50",

        // darkPrimary: "#121212",
        // darkSecondary: "#43484d",
        // darkThird: "#606870",
      },
    },
  },
  plugins: [],
};
