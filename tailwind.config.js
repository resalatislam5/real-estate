/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        hc: "#2B2B2B",
        pc: "#6D6D6D",
        orange: "#FF6647",
      },
      fontSize: {
        "h-x-f": "50px",
        "h-m-f": "18px",
        "h-s-f": "16px",
        "p-x-f": "24px",
        "p-m-f": "14px",
        "p-s-f": "12px",
      },
      backgroundImage: {
        banner: "url('./src/assets/house-with-garage-house-left-side 1.png')",
        garden: "url('./src/assets/garden-1.png')",
      },
    },
  },
  plugins: [],
};
