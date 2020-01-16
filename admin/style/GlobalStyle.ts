import { createGlobalStyle } from 'styled-components'

import { ThemeProps } from './theme'
import getRem from './helper/getRem'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${({ theme }: ThemeProps<{}>) => theme.font.normal};
    background-color: ${({ theme }: ThemeProps<{}>) => theme.color.blue100};
  }

  label {
    font-size: ${getRem(12)};
  }

  p {
    font-size: ${getRem(14)};
  }

  h1 {
    font-size: ${getRem(36)};
    color: ${({ theme }: ThemeProps<{}>) => theme.color.black};
    font-family: ${({ theme }: ThemeProps<{}>) => theme.font.bold};
  }
`

export default GlobalStyle
