/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    enabled: true,
    content: [
      "./src/**/*.html",
      "./src/**/*.scss",
      "./src/**/*.ts",
      "./src/**/*.js",
    ],
  },
  media: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['"Noto Sans TC"', '"sans-serif"'],
    },
    keyframes: {
      "bounce-y": {
        "0%, 100%": { transform: "translateY(0)" },
        "50%": { transform: "translateY(-25%)" },
      },
    },
    animation: {
      "bounce-y": "bounce-y 1s ease-out",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
