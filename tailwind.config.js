/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    extend: {
      colors: {
        indigo: {
          dye: '#3c505a'
        },
        gray: {
          100: '#f9f9f9',
          250: '#f0f0f0',
          300: '#dcdcdc',
          600: '#a9a9a9',
          650: '#697386',
          850: '#696969',
          900: '#3c4257'
        },
        white: '#fff',
        black: '#000',
        purple: {
          100: '#7d7d8e'
        },
        blue: {
          200: '#6a81a4',
          600: '#1357cf'
        },
        success: '#0ca14d',
        warming: '#feb52d',
        danger: '#f42633'
      },
      fontSize: {
        s: '.8125rem'
      },
      boxShadow: {
        tiny: '0px 1px 1px 0px rgba(0,0,0,.35)'
      },
      spacing: {
        2.5: '0.625rem',
        3.75: '0.9375rem',
        4.5: '1.125rem',
        14.25: '3.5625rem',
        45: '11.25rem'
      },
      borderRadius: {
        xl: '1rem'
      }
    }
  },
  variants: {},
  plugins: []
}
