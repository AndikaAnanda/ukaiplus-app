/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Abril Fatface', 'sans-serif']
      }
    },
  },
  plugins: [
    require('flowbite/plugin')({
      charts: true
    })
  ],
}