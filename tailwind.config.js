/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    enabled: true,
    content: [
      "./src/**/*.html",
      "./src/**/*.scss",
      "./src/**/*.ts",
    ],
  },
  media: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['"Noto Sans TC"', '"sans-serif"'],
    },
    extend: {
      colors: {
        rose: {
          DEFAULT: "#D68A98",
          50: "#FFFFFF",
          100: "#FFFFFF",
          200: "#F6E5E8",
          300: "#EBC6CD",
          400: "#E1A8B3",
          500: "#D68A98",
          600: "#C76073",
          700: "#B23E53",
          800: "#883040",
          900: "#5E212C",
          950: "#4A1A23",
        },
        shark: {
          DEFAULT: "#565B67",
          50: "#B4B8C0",
          100: "#A9ADB7",
          200: "#9398A5",
          300: "#7D8392",
          400: "#696F7D",
          500: "#565B67",
          600: "#3C4048",
          700: "#23252A",
          800: "#090A0B",
          900: "#000000",
          950: "#000000",
        },
      },
    },
    keyframes: {
      "bounce-y": {
        "0%, 100%": { transform: "translateY(0)" },
        "50%": { transform: "translateY(-25%)" },
      },
    },
    animation: {
      "bounce-y": "bounce-y 1s ease-out",
      "jump-y": "bounce-y 1s infinite",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
