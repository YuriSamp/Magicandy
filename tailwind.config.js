/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
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
      backgroundImage: {
        'home-banner': "url('/banner/banner-main.png')",
      },
    },
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
};
