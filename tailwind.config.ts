import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#f97316",
          red:    "#dc2626",
          amber:  "#d97706",
          gold:   "#f59e0b",
          bg:     "#0c0905",
          bg2:    "#110d08",
          bg3:    "#1a1108",
        },
      },
    },
  },
  plugins: [],
};
export default config;
