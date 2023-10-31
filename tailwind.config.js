/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        xl: "3rem",
      },
    },
    extend: {
      colors: {
        "soft-primary": "#84D187",
        "hard-primary": "#2C742F",
        primary: "#00B207",
        warning: "#FF8A00",
        danger: "#EA4B48",
      },
      backgroundImage: {
        footer: "url('/src/assets/images/footer.svg')",
        feature: "url('/src/assets/images/featured.png')",
        "feature-hover": "url('/src/assets/images/featured-hover.png')",
      },
    },
  },
  plugins: [],
};
