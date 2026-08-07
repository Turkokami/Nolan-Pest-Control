import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Central NY green / earth — warm, trustworthy, family-owned.
        brand: {
          50: "#f0f7f2",
          100: "#dcecdf",
          200: "#bcd9c3",
          300: "#8fbf9b",
          400: "#5f9e6f",
          500: "#3f8253",
          600: "#2e6740", // primary
          700: "#265336",
          800: "#20422d",
          900: "#1b3726",
        },
        clay: {
          50: "#faf6f1",
          100: "#f0e6d8",
          500: "#b98a52",
          700: "#8a6236",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        prose: "68ch",
      },
    },
  },
  plugins: [],
};

export default config;
