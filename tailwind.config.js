/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        faintGreen: "#1F8268",
        faintGray: "#F4F2F6",
      },
    },
  },
  plugins: [],
};

