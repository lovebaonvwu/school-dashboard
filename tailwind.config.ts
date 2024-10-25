import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "lama-sky": "#c3ebfa",
        "lama-sky-light": "#edf9fd",
        "lama-purple": "#cfceff",
        "lama-purple-light": "#f1f0ff",
        "lama-yellow": "#fae27c",
        "lama-yellow-light": "#fefce8",
      },
    },
  },
  plugins: [],
};
export default config;
