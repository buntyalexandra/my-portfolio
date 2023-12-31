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
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        black: "#000000",
        oxblood: "#41131a",
        pink: {
          100: "#f9e1f7",
          900: "#e269d9",
        },
        green: {
          100: "#d5eccb",
          200: "#97cf7c",
          400: "#51af25",
          900: "#3a8214",
        },
        red: "#ce1b1b",
      },
      width: {
        "100": "28rem",
        "104": "32rem",
        "108": "36rem",
        "116": "44rem",
      },
      height: {
        "100": "28rem",
        "104": "32rem",
        "108": "36rem",
        "116": "44rem",
      },
    },
  },
  plugins: [],
};
export default config;
