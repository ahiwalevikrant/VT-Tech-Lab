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
          950: "#070913",
          900: "#0D111F",
          850: "#12182B",
          800: "#182038",
          700: "#222D4D",
          border: "rgba(255, 255, 255, 0.08)",
        },
        accent: {
          cyan: "#00F0FF",
          sky: "#38BDF8",
          blue: "#3B82F6",
          indigo: "#6366F1",
          purple: "#A855F7",
          emerald: "#10B981",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
      },
      maxWidth: {
        content: "1280px",
      },
      boxShadow: {
        'glow-cyan': '0 0 30px -5px rgba(0, 240, 255, 0.25)',
        'glow-indigo': '0 0 30px -5px rgba(99, 102, 241, 0.25)',
        'glow-emerald': '0 0 30px -5px rgba(16, 185, 129, 0.25)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #38BDF8 0%, #3B82F6 50%, #8B5CF6 100%)',
        'card-gradient': 'linear-gradient(180deg, rgba(30, 41, 59, 0.6) 0%, rgba(15, 23, 42, 0.8) 100%)',
      },
    },
  },
  plugins: [],
};
export default config;
