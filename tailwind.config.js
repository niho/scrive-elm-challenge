/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{elm, js}",
    "./index.html"
  ],
  theme: {
    extend: {},
  },
  plugins: [ require('@tailwindcss/forms') ],
}


