import { ThemedStyledProps } from 'styled-components'

interface ITheme {
  baseFontSize: number
  color: {
    [key: string]: string
  }
  font: {
    normal: string
    bold: string
  }
}

export type ThemeProps<P> = ThemedStyledProps<P, ITheme>

const theme: ITheme = {
  baseFontSize: 16,
  color: {
    purple200: '#dbe3f4',
    purple500: '#ccccff',

    blue100: '#f8fbff',
    blue500: '#48adf1',
    blue700: '#0094ff',
    blue800: '#274f6f',

    red500: '#ff516d',

    green200: '#ccffcf',
    green500: '#48f1b4',
    green600: '#02d57c',

    gray500: '#c9c9c9',
    gray600: '#979797',
    gray700: '#999999',

    white: '#ffffff'
  },
  font: {
    normal: "'HelveticaNeue', Helvetica, Arial, sans-serif",
    bold: "'HelveticaNeueBold', Helvetica, Arial, sans-serif"
  }
}

export default theme
