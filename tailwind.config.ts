import type {Config} from "tailwindcss";
import {fontFamily} from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        praimary: "#BFF747",
        gray: {
          "200": "#FDFDE1",
          "300": "#e6e6e6",
          "400": "#ccc",
          "500": "#333",
          "600": "#999",
        },
        slate: {"200": "#FFFCF2"},
      },
    },
    fontSize: {
      sx: ["15px", {lineHeight: "30px"}],
      xs: ["16px", {lineHeight: "30px"}],
      sm: ["18px", {lineHeight: "30px"}],
      md: ["21px", {lineHeight: "30px"}],
      base: ["30px", {lineHeight: "1.4em"}],
      lg: ["35px", {lineHeight: "1.4em"}],
      xl: ["70px", {lineHeight: "1em", letterSpacing: "-.7px"}],
      "2xl": ["104px", {lineHeight: "1em", letterSpacing: "-.7px"}],
      "3xl": ["24px", {lineHeight: "28px"}],
    },
    boxShadow: {
      sm: "0 4px 0 0 #FDFDE1",
      md: "4px 4px 0px 0px #000",
      lg: "0px 2px 0px 0px #fff",
    },
    fontFamily: {
      syne: ["Syne", ...fontFamily.sans],
      inter: ["'Inter'", ...fontFamily.sans],
    },
    backgroundImage: {
      slide1: "url('/images/project1.png')",
      slide2: "url('/images/project2.png')",
      slide3: "url('/images/project3.png')",
      slide4: "url('/images/project4.png')",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1300px",
      "2xl": "1920px",
    },
  },
  plugins: [],
};
export default config;
