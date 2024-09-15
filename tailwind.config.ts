import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: ["selector", '[data-mode="dark"]'],
  theme: {
    extend: {
      height: {
        ui: "48px",
      },
      backgroundColor: {
        sabstrate:
          "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(9,9,121,0.020133053221288555) 67%)",
      },
      colors: {
        primary: {
          DEFAULT: "rgb(21, 99, 223)",
        },
        dark: {
          DEFAULT: "rgb(22, 29, 45)",
          second: "rgb(38, 46, 59)",
        },
        gray: {
          DEFAULT: "rgb(228, 228, 228)",
          second: "rgb(164, 171, 177)",
        },
      },
      borderWidth: {
        "1": "1px",
      },
    },
  },
  plugins: [],
};
export default config;
