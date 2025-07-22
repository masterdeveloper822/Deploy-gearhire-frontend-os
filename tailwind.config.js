/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["class", "class"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
        tertiary: {
          DEFAULT: "hsl(var(--tertiary))",
          foreground: "hsl(var(--tertiary-foreground))",
        },
        whity: {
          sky: "hsl(var(--whity-sky))",
          red: "hsl(var(--whity-red))",
          gray: "hsl(var(--whity-gray))",
          grayText: "hsl(var(--whity-grayText))",
        },
        colored: {
          gray: "hsl(var(--colored-gray))",
          grayborder: "hsl(var(--colored-grayborder))",
          grayforeground: "hsl(var(--colored-grayforeground))",
          sky: "hsl(var(--colored-sky))",
          skyforeground: "hsl(var(--colored-skyforeground))",
          red: "hsl(var(--colored-red))",
          redforeground: "hsl(var(--colored-redforeground))",
          orange: "hsl(var(--colored-orange))",
          orangeforeground: "hsl(var(--colored-orangeforeground))",
          blue: "hsl(var(--colored-blue))",
          green: "hsl(var(--colored-green))",
          purple: "hsl(var(--colored-purple))",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      fontSize: {
        sm: ["14px", "20px"],
        base: ["16px", "24px"],
        lg: ["18px", "28px"],
        xl: ["20px", "28px"],
        "2xl": ["24px", "32px"],
        "3xl": ["30px", "36px"],
        "4xl": ["36px", "40px"],
        "5xl": ["48px", "56px"],
        "6xl": ["60px", "64px"],
        "7xl": ["72px", "76px"],
        "8xl": ["96px", "96px"],
        "9xl": ["128px", "128px"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("@tailwindcss/typography"),
    require("tailwindcss-animate"),
    function ({ addComponents }) {
      addComponents({
        ".logo-text": {
          "@apply text-xl lg:text-2xl font-bold text-sky-700 leading-6": {},
        },
        ".nav-link": {
          "@apply text-base font-normal leading-6 text-gray-700 hover:text-sky-700 transition-colors px-2":
            {},
        },
      })
    },
  ],
}
