/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bodyBack: "#D4EAF7",
        navBack: "#007AB3",
        inputBorder: "#009AB3",
        placeholderColor: "#BEBEBE",
        bgInput: "#FFFFFF",
        shadow: "#333333",
        selected: "#72A7D7",
        selectedText: "#000000",
        bgCard: "#72A7D7",
        borderPicture: "#000000",
        icon: "#D4EAF7",
        text: "#000000",
        bigText: "#6B7280",
        li1: "#94BCE0",
        li2: "#D28BE3",
        dark_bodyBack: "#303030",
        dark_navBack: "#282828",
        dark_inputBorder: "#404040",
        dark_placeholderColor: "#A0A0A0",
        dark_bgInput: "#202020",
        dark_shadow: "#000000",
        dark_selected: "#303030",
        dark_selectedText: "#FFFFFF",
        dark_bgCard: "#1E1E1E",
        dark_borderPicture: "#FFFFFF",
        dark_icon: "#FFFFFF",
        dark_text: "#C7CCD5",
        dark_bigText:"#C7CCD5",
        dark_li1: "#C7CCD5",
        dark_li2: "#9BA2AD",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        shadow1: "0 0 0 4px rgba(234, 76, 137, 0.1)",
      },
      animation: {
        scale: "scale 1s ease-in-out infinite",
      },
      keyframes: {
        scale: {
          "0%, 100%": { transform: "scale(1)" },
          "33%": { transform: "scale(.3)" },
        },
      },
    },
  },
  plugins: [],
};
