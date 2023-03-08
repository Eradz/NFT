/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 7px 8px rgba(0,0,0,0.20), 0 9px 7px rgba(0,0,0,0.17);'
      },
      colors: {
        'purple': '#6000E8',
        'outline':'#B0B0B0',
        'bg': 'rgba(0, 0, 0, 0.75);'
      },
    },
  },
  plugins: [],
};
