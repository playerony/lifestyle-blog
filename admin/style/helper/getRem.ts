import theme from '../theme'

export default (px: number, base: number = theme.baseFontSize) =>
  `${Math.floor((px / base) * 100) / 100}rem`
