// tailwind.config.js
import daisyui from "daisyui"

const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
    plugins: [
       require('daisyui'),
    ],
     daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  },
};
