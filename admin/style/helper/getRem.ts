import variable from '../variable'

export default (px: number, base: number = variable.baseFontSize) =>
  `${Math.floor((px / base) * 100) / 100}rem`
