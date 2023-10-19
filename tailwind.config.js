/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.{html,scss}', './src/**/*.{tsx,scss}'],
  important: '#root',
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        custom: {
          50: '#28dfbd',
          100: '#39442b',
          200: '#deaa3b',
          300: '#db3736',
          400: '#B08262',
        }
      },
    },
    textColor: {
      primary: '#ebddc9',
      secondary: '#d7c898',
      interesting: '#df4c38'
    },
    fontSize: {
      heading: `13rem`,
      title: `3.6rem;`,
      paragraph: `1.2rem;`
    },
    fontFamily: {
      yeseva: ['Yeseva One', 'serif'],
    },
  },
  plugins: [],
}

