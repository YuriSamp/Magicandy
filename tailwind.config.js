/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        backgroundPink: '#FF8FB1',
        backgroundWhite: '#f8f8ff',
        fontPurple: '#8c52ff',
      },
      fontFamily: {
        kalam: ['Kalam', 'cursive'],
      },
    },
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
};
