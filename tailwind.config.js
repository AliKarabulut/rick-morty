/** @type {import('tailwindcss').Config} */
module.exports = {
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
        icon: "#007AB3",
        text: "#000000",
        li1: "#94BCE0",
        li2: "#D28BE3",
               
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
