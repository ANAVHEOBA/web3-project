/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}",],
  darkMode: "class", 
  theme: {
    extend: {
      colors: {
        "primary-green": "#09e5ab",
        "nav-border": "#f0f0f0",
        "muted": "#757575",
        "light-gray": "#757575",
        "primary-blue": "#0de0fe",
        "dark-blue": "#15558d",
      },
      boxShadow: {
        "light": "2px 2px 13px rgb(0 0 0 / 10%)",
        "input-box": "0px 24px 24px rgb(212 237 255 / 30%)",
      }
    },
  },
  plugins: [],
}
