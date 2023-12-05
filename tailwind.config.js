/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        //Dark
        primary: "#008191",
        black: "#000000",
        white: "#ffffff",

        //flag
        orange: "#ff671f",
        white: "#ffffff",
        green: "#046a38",
      },
      colors: {
        primary: "#008191",
      },
      borderColor: {
        //Dark
        primaryBorderDarkTheme: "#008191",
      },
      aspectRatio: {
        banner: "16 / 9",
        portrait: "12/16",
        newsCardImage: "1.25 / 1",
        largeCard: "21/9",
      },
      flex: {
        flexCategoryLg: "0 0 20%",
        flexCategoryMd: "0 0 60%",
      },
      width: {
        productGap: "48%",
        productGapLg: "30%",
        cartWidth: "94%",
      },
      maxWidth: {
        lg: 1400,
        md: 760,
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
