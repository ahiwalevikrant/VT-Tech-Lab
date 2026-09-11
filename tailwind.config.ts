import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          950: "#050811",
          900: "#090E1A",
          850: "#0E1526",
          800: "#141E34",
          700: "#1E2B4A",
          border: "#1F2D4D",
        },
        brand: {
          cyan: "#00F0FF",
          sky: "#38BDF8",
          blue: "#3B82F6",
          indigo: "#6366F1",
          purple: "#A855F7",
          pink: "#EC4899",
          emerald: "#10B981",
        },
      },
      fontFamily: {
        sans: ["var(--font-plex-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-plex-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        content: "1400px",
      },
      boxShadow: {
        'glow-cyan': '0 0 35px -5px rgba(0, 240, 255, 0.35)',
        'glow-indigo': '0 0 35px -5px rgba(99, 102, 241, 0.35)',
        'glow-purple': '0 0 35px -5px rgba(168, 85, 247, 0.35)',
        'glow-emerald': '0 0 35px -5px rgba(16, 185, 129, 0.35)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #00F0FF 0%, #3B82F6 50%, #8B5CF6 100%)',
        'glass-gradient': 'linear-gradient(180deg, rgba(20, 30, 52, 0.75) 0%, rgba(9, 14, 26, 0.85) 100%)',
      },
    },
  },
  plugins: [],
};
export default config;
