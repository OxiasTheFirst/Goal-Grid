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
        navy: {
          DEFAULT: "#142642", // Primary BMB Deep Navy
          50: "#F4F6F9",
          100: "#E3E8F0",
          200: "#C4CFDF",
          300: "#98ABC5",
          400: "#6B85A8",
          500: "#48668E",
          600: "#324E73",
          700: "#223958",
          800: "#142642", // Primary BMB Navy
          900: "#0E1A2E",
        },
        gold: {
          DEFAULT: "#C9A45C",
          50: "#FAF7EE",
          100: "#F4ECD5",
          200: "#E9D8AA",
          300: "#DDC37E",
          400: "#D3AF52",
          500: "#C9A45C", // Primary BMB Gold
          600: "#B08A41",
          700: "#8D6B30",
          800: "#6B5024",
          900: "#4B3819",
        },
        charcoal: {
          DEFAULT: "#30343B",
          light: "#4B505A",
          muted: "#6B7280",
        },
        surface: {
          light: "#F8F9FB",
          muted: "#F0F2F6",
          dark: "#142642", // Grounded strictly in official BMB Deep Navy
        },
      },
      fontFamily: {
        heading: ["var(--font-space-grotesk)", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["var(--font-dm-sans)", "var(--font-space-grotesk)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1220px",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "pulse-subtle": "pulseSubtle 3s infinite ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.75" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
