/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      './resources/views/app.blade.php',
      './resources/js/**/*.svelte',
      './resources/pages/**/*.svelte',
  ],
  theme: {
    extend: {},
  },
  plugins: [
      require('@tailwindcss/forms'),
  ],
}
