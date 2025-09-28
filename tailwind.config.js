// tailwind.config.js
import { nextui } from "@nextui-org/react"; // if using NextUI or shadcn preset

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./node_modules/@shadcn/ui/**/*.{ts,tsx}",
  ],
  theme: {
    colors: {
      primary: "var(--primary)",
      primaryForeground: "var(--primary-foreground)",
    },

    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Helvetica", "Arial", "sans-serif"],
        mono: ["var(--font-geist-mono)", "Menlo", "monospace"],
        londrina: ["var(--font-londrina)", "cursive"],
      },
    },
  },
  plugins: [],
};
