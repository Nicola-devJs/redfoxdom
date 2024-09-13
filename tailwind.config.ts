import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: ["selector", '[data-mode="dark"]'],
  theme: {
    extend: {
      height: {
        ui: "48px",
      },
      colors: {
        primary: {
          DEFAULT: "rgb(21, 99, 223)",
          dark: "rgb(22, 29, 45)",
        },
        dark: {
          DEFAULT: "rgb(22, 29, 45)",
        },
        gray: {
          DEFAULT: "rgb(228, 228, 228)",
        },
      },
    },
  },
  plugins: [],
};
export default config;
