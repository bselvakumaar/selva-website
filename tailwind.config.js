/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // GitHub Dark Theme
        gh: {
          bg: 'rgb(var(--prof-bg-rgb) / <alpha-value>)',
          'bg-secondary': 'rgb(var(--prof-bg-secondary-rgb) / <alpha-value>)',
          'bg-tertiary': 'rgb(var(--prof-bg-tertiary-rgb) / <alpha-value>)',
          border: 'rgb(var(--prof-border-rgb) / <alpha-value>)',
          blue: 'rgb(var(--prof-blue-rgb) / <alpha-value>)',
          green: 'rgb(var(--prof-emerald-rgb) / <alpha-value>)',
          orange: 'rgb(var(--gh-orange-rgb) / <alpha-value>)',
          purple: 'rgb(var(--gh-purple-rgb) / <alpha-value>)',
          red: 'rgb(var(--gh-red-rgb) / <alpha-value>)',
          yellow: 'rgb(var(--gh-yellow-rgb) / <alpha-value>)',
          text: 'rgb(var(--prof-text-rgb) / <alpha-value>)',
          'text-secondary': 'rgb(var(--prof-text-dim-rgb) / <alpha-value>)',
          'text-tertiary': 'rgb(var(--prof-text-dim-rgb) / <alpha-value>)',
        },
        // Professional Premium Theme
        prof: {
          bg: 'rgb(var(--prof-bg-rgb) / <alpha-value>)',
          'bg-secondary': 'rgb(var(--prof-bg-secondary-rgb) / <alpha-value>)',
          'bg-tertiary': 'rgb(var(--prof-bg-tertiary-rgb) / <alpha-value>)',
          border: 'rgb(var(--prof-border-rgb) / <alpha-value>)',
          blue: 'rgb(var(--prof-blue-rgb) / <alpha-value>)',
          indigo: 'rgb(var(--prof-indigo-rgb) / <alpha-value>)',
          emerald: 'rgb(var(--prof-emerald-rgb) / <alpha-value>)',
          slate: 'rgb(var(--prof-slate-rgb) / <alpha-value>)',
          text: 'rgb(var(--prof-text-rgb) / <alpha-value>)',
          'text-dim': 'rgb(var(--prof-text-dim-rgb) / <alpha-value>)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
        "typing": {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
        "blink": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(88, 166, 255, 0.2)" },
          "50%": { boxShadow: "0 0 40px rgba(88, 166, 255, 0.4)" },
        },
        "draw-line": {
          "0%": { strokeDashoffset: "1000" },
          "100%": { strokeDashoffset: "0" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "count-up": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
        "typing": "typing 2s steps(40, end)",
        "blink": "blink 1s step-end infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "draw-line": "draw-line 2s ease-out forwards",
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
        "count-up": "count-up 0.5s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
