/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#0047FF',
        secondary: '#3DADFF',
        light: '#E2E8F0',
        warning: '#F59E0B',
        dark: "#061428",
      },
      textColor: {
        primary: '#29292B',
      }
    },
  },
  plugins: [],
};
