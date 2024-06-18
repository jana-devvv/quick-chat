/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#D3B98B",
        bg: "#313338",
        secondary: "#1E1F22",
        input: "#383A40",
      },
    },
  },
  plugins: [],
};
