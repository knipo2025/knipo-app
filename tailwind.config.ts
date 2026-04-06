import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        knipo: {
          black: "#0A0A0A",
          dark: "#111111",
          surface: "#1A1A1A",
          gold: "#C9A84C",
          "gold-light": "#E8C96A",
          "gold-dark": "#8B6914",
          cream: "#F5F0E8",
          "cream-dark": "#E8E4DC",
          muted: "#6B6B6B",
          border: "#2A2A2A",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 8vw, 7rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.5rem, 6vw, 5rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(2rem, 4vw, 3.5rem)", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        "heading-xl": ["clamp(1.75rem, 3vw, 2.5rem)", { lineHeight: "1.2" }],
        "heading-lg": ["clamp(1.5rem, 2.5vw, 2rem)", { lineHeight: "1.25" }],
        "heading-md": ["clamp(1.25rem, 2vw, 1.5rem)", { lineHeight: "1.3" }],
        "body-lg": ["1.125rem", { lineHeight: "1.75" }],
        "body-md": ["1rem", { lineHeight: "1.7" }],
        "body-sm": ["0.875rem", { lineHeight: "1.6" }],
        "label": ["0.75rem", { lineHeight: "1.5", letterSpacing: "0.1em" }],
      },
      spacing: {
        "section": "6rem",
        "section-sm": "4rem",
        "section-lg": "8rem",
      },
      maxWidth: {
        "content": "75rem",
        "prose": "68ch",
        "narrow": "55rem",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease forwards",
        "fade-in": "fadeIn 0.5s ease forwards",
        "shimmer": "shimmer 2s linear infinite",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        shimmer: {
          from: { backgroundPosition: "-200% 0" },
          to: { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
