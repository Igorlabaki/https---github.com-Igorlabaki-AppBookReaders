
module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ]
  ,
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage:{
        'welcomeImage' : "url('/images/photos/welcomeImage.jpeg')"
      },
      fontFamily:{
        'josefina':["'Josefin Sans'", 'sans-serif'],
        'lora'    : ['Lora', 'serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
