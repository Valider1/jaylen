/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5",
        secondary: "#6366F1"
      },
      backgroundImage: {
        hero: "url('/images/hero-bg.jpg')",
      }
    }
  },
  plugins: [],
}
