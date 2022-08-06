/** @type {import('tailwindcss').Config} */
const colors = require('./src/utils/colors')

module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './screens/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors,
      fontFamily: {
        satoshiRegular: ['Satoshi-Regular', 'sans-serif'],
        satoshiBold: ['Satoshi-Bold', 'sans-serif'],
        satoshiLight: ['Satoshi-Light', 'sans-serif'],
        satoshi: ['Satoshi-Medium', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
