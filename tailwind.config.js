/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F5F5DC',
        pasta: '#E6D7B7',
        tomato: '#DC143C',
        herbs: '#228B22',
      },
      fontFamily: {
        'serif': ['Georgia', 'serif'],
        'script': ['Dancing Script', 'cursive'],
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}