import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          950: "#0B192C",
          900: "#0F172A",
          850: "#1E293B",
          800: "#334155",
          700: "#475569",
          border: "rgba(15, 23, 42, 0.08)",
        },
        brand: {
          navy: "#0B192C",
          midnight: "#0F172A",
          cyan: "#00D2FF",
          sky: "#0284C7",
          electric: "#0EA5E9",
          light: "#F8FAFC",
        },
        accent: {
          cyan: "#00D2FF",
          sky: "#0284C7",
          blue: "#2563EB",
          indigo: "#4F46E5",
          purple: "#9333EA",
          emerald: "#059669",
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
        'glow-cyan': '0 0 30px -5px rgba(2, 132, 199, 0.25)',
        'glow-indigo': '0 0 30px -5px rgba(79, 70, 229, 0.2)',
        'glow-emerald': '0 0 30px -5px rgba(5, 150, 105, 0.2)',
        'card-light': '0 4px 20px -2px rgba(15, 23, 42, 0.06), 0 1px 3px 0 rgba(15, 23, 42, 0.04)',
        'card-hover': '0 16px 36px -8px rgba(2, 132, 199, 0.16), 0 4px 12px -2px rgba(15, 23, 42, 0.04)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #0B192C 0%, #0284C7 50%, #00D2FF 100%)',
        'card-gradient': 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)',
      },
    },
  },
  plugins: [],
};
export default config;
