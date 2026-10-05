import tailwindcssAnimate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        sm: "0.750rem",
        base: "1rem",
        xl: "1.333rem",
        "2xl": "1.777rem",
        "3xl": "2.369rem",
        "4xl": "3.158rem",
        "5xl": "4.210rem",
      },
      fontFamily: {
        heading: ['"Playfair Display"', "Georgia", "serif"],
        body: ['"Jost"', "system-ui", "sans-serif"],
        serif: ['"Playfair Display"', "ui-serif", "Georgia", "serif"],
        sans: ['"Jost"', "ui-sans-serif", "system-ui", "sans-serif"],
      },
      fontWeight: {
        normal: "400",
        bold: "700",
      },
      colors: {
        text: "#1e1915",
        background: "#faf8f5",
        primary: {
          DEFAULT: "#9b7126",
          foreground: "#faf8f5",
        },
        secondary: {
          DEFAULT: "#362d26",
          foreground: "#faf8f5",
        },
        accent: {
          DEFAULT: "#c5a059",
          foreground: "#1e1915",
        },
        ivory: "#faf8f5",
        beige: "#f4ede4",
        linen: "#e8ded2",
        champagne: "#c5a059",
        walnut: "#362d26",
        matte: "#1e1915",
        charcoal: "#362d26",
        brandgold: "#9b7126",
        brandred: "#a63a2c",
        foreground: "#1e1915",
        card: {
          DEFAULT: "#faf8f5",
          foreground: "#1e1915",
        },
        popover: {
          DEFAULT: "#faf8f5",
          foreground: "#1e1915",
        },
        muted: {
          DEFAULT: "#f4ede4",
          foreground: "#6d6158",
        },
        destructive: {
          DEFAULT: "#a63a2c",
          foreground: "#faf8f5",
        },
        border: "#e8ded2",
        input: "#e8ded2",
        ring: "#9b7126",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      letterSpacing: {
        overline: "0.24em",
      },
      boxShadow: {
        soft: "0 8px 30px rgb(0 0 0 / 0.04)",
        deep: "0 20px 40px rgb(0 0 0 / 0.08)",
        inset: "inset 0 0 0 1px rgba(212,175,55,0.25)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-up": "fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) both",
        shimmer: "shimmer 2.4s linear infinite",
        marquee: "marquee 40s linear infinite",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};
