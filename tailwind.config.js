/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors:{
        primary:"#F5F5F5B2",
        button:"#F47D31",
        sec:"white"
      },
      fontFamily:{
        first:"Raleway"
      },
      height:{
        first:"100vh"
      }
    },
  },
  plugins: [],
}

