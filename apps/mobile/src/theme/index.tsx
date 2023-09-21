import { config as defaultConfig, createConfig } from '@gluestack-ui/themed'

export const theme = createConfig({
  ...defaultConfig.theme,
  tokens: {
    ...defaultConfig.theme.tokens,
    colors: {
      ...defaultConfig.theme.tokens.colors,
      gray100: '#F7F7F8',
      gray200: '#EDECEE',
      gray300: '#D9D8DA',
      gray500: '#9F9BA1',
      gray600: '#5F5B62',
      gray700: '#3E3A40',
      gray800: '#1A181B',
      blue: '#364D9D',
      blueLight: '#647AC7',
      redLight: '#EE7979',
    },
    fonts: {
      heading: 'Karla-Bold',
      body: 'Karla-Regular',
    },
    fontSizes: {
      xs: 12,
      sm: 14,
      md: 16,
      lg: 20,
      xl: 24,
    },
    lineHeights: {
      ...defaultConfig.theme.tokens.lineHeights,
      'xs-130': 12 * 1.3,
      'sm-130': 14 * 1.3,
      'md-130': 16 * 1.3,
      'lg-130': 20 * 1.3,
      'xl-130': 24 * 1.3,
    },
  },
})
