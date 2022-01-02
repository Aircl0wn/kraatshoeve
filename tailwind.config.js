const { group } = require("console")

module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.html',
    '.eleventy.js'
  ],
  theme: {
    extend: {
      colors: {
        kh: {
          'dark': '#535335',
          'medium': '#b0a67d',
          'light': '#f0ede5'
        },
      },
    },
    fontFamily: {
      'heading': ['Koara', 'sans-serif'],
      'body': ['Karla', 'sans-serif'],
      'quote': ['Tiffany', 'sans-serif']
    }
  },
  plugins: [],
}
