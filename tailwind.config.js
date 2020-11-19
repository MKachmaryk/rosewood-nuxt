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
          500: '#3c505a',
          550: '#2c3e50'
        },
        gray: {
          100: '#f9f9f9',
          200: '#f1f1f1',
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
          600: '#1357cf',
          850: '#3b5164'
        },
        success: '#0ca14d',
        warming: '#feb52d',
        red: {
          150: '#f42633',
          240: '#c42c00',
          250: '#c51a00'
        },
        green: {
          650: '#3ca500'
        }
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
