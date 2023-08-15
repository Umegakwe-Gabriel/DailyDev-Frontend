/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        meduim: {max: "768px"},
        max: {max: "768px"}
      }
    },
  },
  plugins: [],
}

