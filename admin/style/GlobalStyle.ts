import { createGlobalStyle } from 'styled-components'

import { ThemeProps } from './theme'
import getRem from './helper/getRem'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${({ theme }: ThemeProps<{}>) => theme.font.normal};
  }

  label {
    font-size: ${getRem(12)};
    color: ${({ theme }: ThemeProps<{}>) => theme.color.gray700};
  }
`

export default GlobalStyle
