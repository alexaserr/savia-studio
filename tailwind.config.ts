import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: "#2D5A27",
          dark: "#1B3A18",
        },
        amber: {
          DEFAULT: "#C4841D",
          light: "#D4A24A",
        },
        cream: "#FAF7F2",
        sand: "#E8E0D4",
        "warm-gray": "#9B9286",
        charcoal: "#2C2C2C",
        "soft-black": "#1A1A1A",
        sage: {
          DEFAULT: "#A8B99C",
          muted: "#C5D1BC",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "'Cormorant Garamond'", "Georgia", "serif"],
        // Swap for Kenao when you have the font files:
        // display: ["'Kenao Sans Serif'", "'Cormorant Garamond'", "Georgia", "serif"],
        body: ["'Montserrat'", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(32px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "scroll-pulse": {
          "0%, 100%": { opacity: "0.4", transform: "scaleY(1)" },
          "50%": { opacity: "0.8", transform: "scaleY(1.15)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.9s cubic-bezier(0.16,1,0.3,1) forwards",
        "fade-in": "fade-in 0.9s cubic-bezier(0.16,1,0.3,1) forwards",
        "scroll-pulse": "scroll-pulse 2.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
