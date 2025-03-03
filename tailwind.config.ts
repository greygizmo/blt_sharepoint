import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    'animate-laser-glow',
    'animate-neon-pulse',
    'animate-glitch',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        "blt-orange": "#EA5504",
        "blt-dark": "#D34A00",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        gray: {
          100: "#F5F5F5",
          200: "#EEEEEE",
          300: "#E0E0E0",
          400: "#BDBDBD",
          500: "#9E9E9E",
          600: "#757575",
          700: "#616161",
          800: "#424242",
          900: "#212121",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
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
      },
      fontFamily: {
        heading: ['var(--font-winston)', 'serif'],
        winston: ['var(--font-winston)', 'serif'],
        sans: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
        'space-grotesk': ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
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
        "laser-glow": {
          "0%, 100%": { 
            boxShadow: "0 0 5px #EA5504, 0 0 10px #EA5504"
          },
          "50%": { 
            boxShadow: "0 0 20px #EA5504, 0 0 30px #EA5504"
          },
        },
        "vertical-laser": {
          "0%": { 
            height: "0%",
            opacity: "0.6",
          },
          "100%": { 
            height: "100%",
            opacity: "1",
          },
        },
        "float": {
          "0%, 100%": {
            transform: "translateY(0)"
          },
          "50%": {
            transform: "translateY(-10px)"
          }
        },
        "scan-lines": {
          "0%": {
            backgroundPosition: "0 0"
          },
          "100%": {
            backgroundPosition: "0 100%"
          }
        },
        "neon-pulse": {
          "0%, 100%": { textShadow: "0 0 5px #EA5504, 0 0 10px #EA5504" },
          "50%": { textShadow: "0 0 20px #EA5504, 0 0 30px #EA5504" },
        },
        "glitch": {
          "0%, 5%, 10%, 15%, 20%, 25%, 100%": { 
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            transform: "translate(0)",
          },
          "2.5%, 7.5%, 12.5%, 17.5%, 22.5%": { 
            clipPath: "polygon(0 5%, 100% 0, 100% 100%, 0 95%)",
            transform: "translate(-5px)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "laser-glow": "laser-glow 2s infinite",
        "vertical-laser": "vertical-laser 2s ease-out forwards",
        "float": "float 6s ease-in-out infinite",
        "scan-lines": "scan-lines 2s linear infinite",
        "neon-pulse": "neon-pulse 2s infinite",
        "glitch": "glitch 5s infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config; 