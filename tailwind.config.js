/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        interFont: ["Inter", "sans-serif"],
      },
    },
    //using for override the current ulity class
    fontWeight: {
      semibold: "500",
      bold: "600",
      subBold: "700",
      markerBold: "800",
      extrabold: "900",
    },
    fontSize: {
      lgg: "3.8rem",
      md: "3rem",
      sm: "0.8rem",
      base: "0.875rem",
      lg: "1.375rem",
      xl: "1rem",
      "2xl": "1.125rem",
      "3xl": "1.6rem",
      "4xl": "2rem",
      "5xl": "2.5rem",
      "6xl": "5.5rem",
    },
    colors: {
      blue: "#0f73ff",
      gray: "#71717a",
      dark: "#191919",
      white: "#FFFF",
      gray_dark: "#4c4c4c",
      lightBlue: "#10bcda",
      ligtGreen: "#00b87a",
      lightOrange: "#ef4b2e",
      hoverBtn: "#0062ff",
    },
    animation: {
      rotate360: "rotate360 2s linear infinite",
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [],
};
