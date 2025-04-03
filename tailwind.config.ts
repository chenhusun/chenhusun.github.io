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
        // 赛博风配色方案
        'cyber-black': '#0D0208',
        'cyber-dark': '#003B00',
        'cyber-green': '#008F11',
        'cyber-glow': '#00FF41',
        'cyber-blue': '#0f1c2e',
        'cyber-purple': '#8000FF',
        'cyber-pink': '#FF00FF',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#00FF41',
            a: {
              color: '#00FF41',
              '&:hover': {
                color: '#008F11',
              },
            },
            h1: {
              color: '#00FF41',
            },
            h2: {
              color: '#00FF41',
            },
            h3: {
              color: '#00FF41',
            },
            h4: {
              color: '#00FF41',
            },
            code: {
              color: '#FF00FF',
            },
            pre: {
              backgroundColor: '#0D0208',
            }
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config; 