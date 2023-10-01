/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    // screens: {
    //   'sm': '640px',
    //   // => @media (min-width: 640px) { ... }

    //   'md': '768px',
    //   // => @media (min-width: 768px) { ... }

    //   'lg': '991px',
    //   // => @media (min-width: 991px) { ... }

    //   'xl': '1024px',
    //   // => @media (min-width: 1024px) { ... }

    //   '2xl': '1280px',
    //   // => @media (min-width: 1280px) { ... }
    // },
    extend: {
      colors: {
        Header: "#5F696E",
        Text: "#00030f",
        Button: "#2ca58d",
        Red: "#EF5350",
        Transparent: "rgba(0,0,0,0.5)",
        main: "#FFFDD1",
        submain: "#FFFEF2",
        dry: "#FFFBF1",
        star: "#FFB000",
        Text: "#080A1A",
        border: "#4b5563",
        dryGray: "#E0D5D5",
        glass: "rgba(0, 0,0, 0.3)",
      },
      transitions: {
        transition1: "0.5s ease in",
        transition2: " all 1s ease",
      },
    },
  },
  plugins: [
    require("@shrutibalasa/tailwind-grid-auto-fit")
  ],
}