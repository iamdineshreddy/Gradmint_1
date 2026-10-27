/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#0078C0",
          "blue-dark": "#005A8F",
          teal: "#00A0B0",
          "teal-dark": "#007A88",
          "mint-teal": "#18B0A0",
          green: "#38B880",
          "green-dark": "#2E9266",
          mint: "#44D4B4",
          "mint-dark": "#158563",
        },
        warm: {
          white: "#FAF9F6",
          pure: "#FFFFFF",
        },
        ink: "#303747",
        muted: "#687184",
        line: "#DDEBE8",
        "line-soft": "#F0F2F4",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
      },
      animation: {
        "gradint-shift": "gradint-shift 6s ease-in-out infinite",
        "fluid-flow": "fluid-flow 8s ease-in-out infinite",
      },
      keyframes: {
        "gradint-shift": {
          "0%, 100%": { filter: "hue-rotate(0deg)" },
          "50%": { filter: "hue-rotate(15deg)" },
        },
        "fluid-flow": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
    },
  },
  plugins: [],
}