export interface IVariable {
  largeScreen: number
  mediumScreen: number
  smallScreen: number
  mobileScreen: number
  paddingSmall: number
  paddingMedium: number
  paddingBig: number
  baseFontSize: number
  color: {
    [key: string]: string
  }
  font: {
    normal: string
    bold: string
  }
}
