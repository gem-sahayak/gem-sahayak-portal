// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#0C2E4A",
        secondary: "#10B981",
        accent: "#3B82F6",
        background: "#F8FAFC",
        card: "#FFFFFF",
        border: "#E5E7EB",
      },
      borderRadius: {
        lg: "24px",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      spacing: {
        96: "24rem",
        120: "30rem",
        140: "35rem",
      },
      backgroundImage: {
        "gradient-bg": "linear-gradient(180deg, #ffffff, #f8fbff, #f5fcfa)"
      },
    },
  },
  plugins: [],
};
