module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#015BAB',
        },
        secondary: {
          DEFAULT: '#47AB32',
        },
        danger: {
          DEFAULT: '#D74411'
        }
      }
    },
  },
  variants: {
    // extend: {},
    position: ['after'],
    transform: ['after'],
    translate: ['after'],
    inset: ['after'],
    backgroundImage: ['after'],
    gradientColorStops: ['after'],
  },
  plugins: [require('tailwindcss-pseudo-elements')],
}
