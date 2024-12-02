/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors:{
        sidebarColor: "#03C0C1",
      }
    },
  },
  plugins: [require("daisyui")],
};
