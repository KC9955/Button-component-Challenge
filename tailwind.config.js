/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'regal-red': '#F7542E',
        'dark-blue':'#090F31',
        'gray-bg':'#FAFBFD',
      },
    }
  },
  plugins: [],
}