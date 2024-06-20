/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    fontFamily: {
    
      Outfit: ["Outfit", "serif"],
      Manrope: ["Manrope", "serif"],
    },
    extend: {
      backgroundImage: {
        pattern: "url('/src/Assets/Background/wave.png')",
      },
    },
  },
  plugins: [
    require("daisyui"),
    require("tw-elements/dist/plugin.cjs"),
    require("@sira-ui/tailwind"),
  ],
};
