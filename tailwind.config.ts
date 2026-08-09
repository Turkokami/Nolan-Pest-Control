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
        // Real Nolan brand: black + gold, green-marble accent, cream text.
        gold: {
          300: "#e7c86b",
          400: "#d8b455",
          500: "#c9a24a",
          600: "#b28a35",
          700: "#8a6a26",
        },
        ink: {
          900: "#0c0c0a", // near-black page/base
          800: "#121210",
          700: "#15140f", // panels
          600: "#1b1a12",
          line: "#2c2a1e", // hairline borders on dark
        },
        cream: {
          50: "#f6efdc",
          100: "#f4ecd6",
          200: "#cbc3ab",
          300: "#948c77",
        },
        marble: "#213a24",
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
