const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        display: ['Poppins', ...defaultTheme.fontFamily.sans],
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#F9F9FB',
      'blue': '#0070F3',
      'turquoise': '#50E3C2',
      'violet': '#7928CA',
      'black': '#232323',
    },
  },
  variants: {
    opacity: ['responsive', 'hover', 'focus', 'group-hover', 'group-focus'],
    textColor: ['responsive', 'hover', 'focus', 'group-hover', 'group-focus'],
    borderColor: ['responsive', 'hover', 'focus', 'active', 'group-hover', 'group-focus']
  },
  plugins: [],
  experimental: {
    applyComplexClasses: true,
    uniformColorPalette: true,
  }
}
