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
        background: "#44281d",
        background2: "#f1f1f1",
        background3: "#ffffff",
        text: "#e4a788",
        hover: "#97ce4c",
        icon: "#f0e14a",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        shadow1: "0 0 0 4px rgba(234, 76, 137, 0.1)",
      },
    },
  },
  plugins: [],
};
