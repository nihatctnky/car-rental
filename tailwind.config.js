/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-gray': 'rgb(23, 23, 23)',
        'hero': 'rgb(23, 23, 23)',
        'pattern': 'rgb(23, 23, 23)',
        'black-100': '#2b2c35',
        'primary-blue': '#2b59ff',
        'primary-blue-100': '#f5f8ff',
        'grey': '#747a88',
        'light-white': 'rgba(59, 60, 152, 0.03)',
        'light-white-100': 'rgba(59, 60, 152, 0.02)',
        'secondary-orange': '#f79761',
      },
      fontSize: {
        '72px': '72px',
        '64px': '64px',
        '50px': '50px',
        '32px': '32px',
        '14px': '14px',
        '27px': '27px',
      },
      spacing: {
        '1440px': '1440px',
        '590px': '590px',
      },
      // Diğer özelleştirilmiş ayarları burada tanımlayabilirsiniz
    },
  },
  plugins: [],
}