/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
     "./app/**/*.{js,jsx,ts,tsx}",
     "./components/**/*.{js,jsx,ts,tsx}",
     "./components/**/*.tsx",
     "./primitive/**/*.{js,jsx,ts,tsx}",
     "./primitive/**/*.tsx",
    ],
  theme: {
    extend: {
      colors: {
          primary: '#F6640A'
      }
      
    },
  },
  plugins: [],
}

