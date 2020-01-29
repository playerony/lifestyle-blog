import { createGlobalStyle } from 'styled-components'

import { ThemeProps } from './theme'
import getRem from './helper/getRem'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${({ theme }: ThemeProps<{}>) => theme.font.normal};
    background-color: ${({ theme }: ThemeProps<{}>) => theme.color.blue100};
  }

  label {
    font-size: ${getRem(20)};
  }

  p {
    font-size: ${getRem(14)};
  }

  h1 {
    font-weight: bold;
    font-size: ${getRem(32)};
    color: ${({ theme }: ThemeProps) => theme.color.black};
    font-family: ${({ theme }: ThemeProps) => theme.font.bold};
  }

  h2 {
    font-weight: bold;
    font-size: ${getRem(24)};
    color: ${({ theme }: ThemeProps) => theme.color.black};
    font-family: ${({ theme }: ThemeProps) => theme.font.bold};
  }

  h3 {
    font-weight: bold;
    font-size: ${getRem(19)};
    color: ${({ theme }: ThemeProps) => theme.color.black};
    font-family: ${({ theme }: ThemeProps) => theme.font.bold};
  }

  h4 {
    font-weight: bold;
    font-size: ${getRem(16)};
    color: ${({ theme }: ThemeProps) => theme.color.black};
    font-family: ${({ theme }: ThemeProps) => theme.font.bold};
  }

  h5 {
    font-weight: bold;
    font-size: ${getRem(13)};
    color: ${({ theme }: ThemeProps) => theme.color.black};
    font-family: ${({ theme }: ThemeProps) => theme.font.bold};
  }

  h6 {
    font-weight: bold;
    font-size: ${getRem(11)};
    color: ${({ theme }: ThemeProps) => theme.color.black};
    font-family: ${({ theme }: ThemeProps) => theme.font.bold};
  }
`

export default GlobalStyle
