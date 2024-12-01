/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'dark-primary': 'rgb(9, 9, 11)'
      },
      colors: {
        'primary-dark': 'linear-gradient(45deg, #4e97ff, #3f7ad7, #1e58b8)'
      },
      backgroundImage: {
        'primary': "url(&quot;data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke-width='2' stroke='rgb(30 58 138 / 0.5)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e&quot;)"
      },
      boxShadow: {
        glow: "0 8px 24px rgba(255, 255, 255, 0.3)", // Custom glow shadow
      }
    },
  },
  plugins: [],
}