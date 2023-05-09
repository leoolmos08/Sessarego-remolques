/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'truck': "url('/src/assets/truck-bg-cut.jpg')",
      },
    },
  },
  plugins: [],
}

