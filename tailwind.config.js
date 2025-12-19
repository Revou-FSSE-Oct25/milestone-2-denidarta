/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      fontFamily: {
        barriecito: ['Barriecito', 'system-ui'],
        barrio: ['Barrio', 'system-ui'],
      },
    },
  },
  plugins: [],
}

