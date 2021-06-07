module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        lumin: {
          DEFAULT:'#2b2e2b',
          darkgreen:'#3d5b57',
          dark:'#2B2E2B',
          lightgreen:'#E2E6E3',
          button:'#4B5548',
          grey:'rgb(198, 204, 199)',
          darkwhite:'#f2f2ef',
          darkgrey:'#696969'
        }
      },
      fontSize: {
        'x-tiny':'9px',
        'tiny':'11px',
        'minor':'14px',
        'major':'16px',
        'major-big':'18px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
