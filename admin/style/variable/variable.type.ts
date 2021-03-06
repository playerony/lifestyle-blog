export interface IBreakpoint {
  largeScreen: number
  mediumScreen: number
  smallScreen: number
  mobileScreen: number
}

export interface IVariable {
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
  breakpoint: IBreakpoint
}
