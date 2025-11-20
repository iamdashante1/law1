import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./sections/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        lg: "1.5rem",
        xl: "2rem",
        "2xl": "2.5rem",
      },
      screens: { lg: "1024px", xl: "1200px", "2xl": "1400px" },
    },
    extend: {
      colors: {
        brand: {
          50: '#f5f7fb',
          100: '#e9eef7',
          200: '#c9d7ee',
          300: '#a9c0e6',
          400: '#6a93d4',
          500: '#2b66c3',
          600: '#1d4b9a',
          700: '#173c7b',
          800: '#102c5b',
          900: '#0b2144',
          950: '#06162e',
        },
        accent: '#c7a243',
      },
      fontFamily: {
        display: ['var(--font-playfair)'],
        sans: ['var(--font-inter)'],
      },
    },
  },
  plugins: [],
}

export default config
