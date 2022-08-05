/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './screens/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
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
