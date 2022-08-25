/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#A8FF35",
        secondary: "#87D322",
        btnHover: "#8CC83A",
        black: "#000000",
        black2: "#2B2B2B",
        grey: "#8B8B8B",
        grey2: "#ADADAD",
        grey3: "#F5F5F5",
        grey4: "#F1F1F1",
        white: "#FFFFFF",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        edu: ["Edu SA Beginner", "cursive"],
      },
      backgroundImage: {
        "hero-pc": "url('/src/assets/Bg-hero/website.png')",
        "hero-mobile": "url('/src/assets/Bg-hero/mobile.png')",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
