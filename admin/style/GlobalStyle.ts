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
`

export default GlobalStyle
