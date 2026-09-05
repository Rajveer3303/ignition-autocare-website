import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand red sampled from the official Ignition Autocare spark plug logo
        // (public/images/logo.jpg). 500 is the exact logo red: #e21d27.
        brand: {
          50: "#fff0f0",
          100: "#ffe1e2",
          200: "#fdc4c7",
          300: "#fb989d",
          400: "#f25a62",
          500: "#e21d27",
          600: "#c3131c",
          700: "#a40e16",
          800: "#850f15",
          900: "#691116",
        },
        // Neutral scale (slate). Previously only 900/700/500 were defined while
        // components referenced 200/300/400/600/800 — those emitted no CSS.
        ink: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        // `font-heading` is used across ~29 components but was never declared,
        // so it silently fell back to the body font. Mapped to the same stack
        // to keep rendering identical while making the utility valid.
        heading: ["var(--font-sans)", "system-ui", "sans-serif"],
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
