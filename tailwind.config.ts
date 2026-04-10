import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#e6f7ff",
          100: "#cceeff",
          200: "#99ddff",
          300: "#66ccff",
          400: "#33bbff",
          500: "#0099cc",
          600: "#0077aa",
          700: "#005588",
          800: "#003366",
          900: "#001144",
          DEFAULT: "#0099cc",
        },
        accent: {
          50: "#fef0ed",
          100: "#fdddda",
          200: "#fbaca5",
          300: "#f97b6f",
          400: "#f44a3a",
          500: "#ca3121",
          600: "#a72819",
          700: "#841f10",
          800: "#611608",
          900: "#3e0d00",
          DEFAULT: "#ca3121",
        },
        "muted-slate": "#7b97aa",
        "light-bg": "#ebeff2",
        "dark-slate": "#354652",
      },
      fontFamily: {
        heading: ["Work Sans", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        body: ["Lato", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
