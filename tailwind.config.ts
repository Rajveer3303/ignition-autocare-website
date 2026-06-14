import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
          700: "#c2410c",
          800: "#9a3412",
          900: "#7c2d12",
        },
        ink: {
          900: "#0f172a",
          700: "#334155",
          500: "#64748b",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        plate: ["var(--font-plate)", "monospace"],
      },
      boxShadow: {
        card: "0 4px 24px -4px rgba(15, 23, 42, 0.08)",
        "card-hover": "0 12px 40px -8px rgba(15, 23, 42, 0.18)",
      },
    },
  },
  plugins: [],
};
export default config;
