export default {
  plugins: {
    'postcss-import': {},
    'postcss-flexbugs-fixes': {
      bug6: true,
      bug8: true
    },
    'tailwindcss/nesting': {},
    tailwindcss: {},
    'postcss-preset-env': {
      autoprefixer: {
        flexbox: true,
        grid: 'autoplace'
      },
      stage: 3,
      features: {
        'custom-properties': false,
        'nesting-rules': true
      }
    },
    autoprefixer: {
      flexbox: true,
      grid: 'autoplace',
      overrideBrowserslist: [
        'last 2 versions',
        '> 1%',
        'not dead',
        'not IE 11'
      ]
    },
    ...(process.env.NODE_ENV === 'production'
      ? {
          cssnano: {
            preset: ['default', {
              discardComments: {
                removeAll: true
              },
              normalizeWhitespace: false,
              calc: true,
              colormin: true,
              convertValues: true,
              minifyGradients: true
            }]
          }
        }
      : {})
  }
} 