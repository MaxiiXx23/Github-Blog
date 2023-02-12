export const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tabletS: '600px',
  tabletM: '660px',
  tabletL: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
} as const

export const defaultTheme = {
  white: '#FFF',
  'blue-500': '#3294F8',

  'slate-100': '#E7EDF4',
  'slate-300': '#C4D4E3',
  'slate-400': '#AFC2D4',
  'slate-500': '#7B96B2',

  'gray-500': '#3A536B',
  'gray-600': '#1C2F41',
  'gray-700': '#112131',
  'gray-800': '#0B1B2B',
  'gray-900': '#071422',

  'black-500': '#040F1A',

  device: {
    mobileS: `(max-width: ${size.mobileS})`,
    mobileM: `(max-width: ${size.mobileM})`,
    mobileL: `(max-width: ${size.mobileL})`,
    tabletS: `(max-width: ${size.tabletS})`,
    tabletM: `(max-width: ${size.tabletM})`,
    tabletL: `(max-width: ${size.tabletL})`,
    laptop: `(max-width: ${size.laptop})`,
    laptopL: `(max-width: ${size.laptopL})`,
    desktop: `(max-width: ${size.desktop})`,
    desktopL: `(max-width: ${size.desktop})`,
  },
} as const
