import type {Config} from "tailwindcss";

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
        gray: {"200": "#FDFDE1"},
      },
    },
    fontSize: {
      xs: ["16px", {lineHeight: "30px"}],
      sm: ["18px", {lineHeight: "30px"}],
      md: ["21px", {lineHeight: "30px"}],
      base: ["30px", {lineHeight: "1.4em"}],
      lg: ["35px", {lineHeight: "1.4em"}],
      xl: ["70px", {lineHeight: "1em", letterSpacing: "-.7px"}],
      "2xl": ["104px", {lineHeight: "1em", letterSpacing: "-1px"}],
    },
    boxShadow: {
      sm: "0 4px 0 0 #FDFDE1",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
    },
  },
  plugins: [],
};
export default config;
//lato: ["'Lato'", ...fontFamily.sans],
