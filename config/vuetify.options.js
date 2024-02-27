import colors from 'vuetify/lib/util/colors'

const palette = {
  mint: {
    primary: colors.blue, // primary main
    primarylight: colors.lightBlue, // primary light
    primarydark: colors.indigo.lighten3, // primary dark
    secondary: colors.blueGrey, // secondary main
    secondarylight: colors.blueGrey.lighten4, // secondary light
    secondarydark: colors.blueGrey.darken4, // secondary dark
    anchor: colors.grey // link
  },
}

export const theme = {
  ...palette.mint
}

export default {
  rtl: false,
  theme: {
    dark: true,
    themes: {
      light: {
        ...theme
      },
      dark: {
        ...theme
      }
    },
    options: {
      customProperties: true
    }
  },
  icons: {
    iconfont: 'fa'
  }
}
