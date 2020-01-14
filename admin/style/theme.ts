import { ThemedStyledProps } from 'styled-components'

interface ITheme {
  color: {
    [key: string]: string
  }
}

export type ThemeProps<P> = ThemedStyledProps<P, ITheme>

const theme: ITheme = {
  color: {
    purple500: '#ccccff',

    blue500: '#48adf1',
    blue700: '#0094ff',

    red500: '#ff516d',

    green200: '#ccffcf',
    green500: '#48f1b4',
    green600: '#02d57c',

    gray500: '#c9c9c9',
    gray600: '#979797',
    gray700: '#999999',

    white: '#ffffff'
  }
}

export default theme
