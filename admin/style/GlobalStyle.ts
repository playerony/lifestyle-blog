import { createGlobalStyle } from 'styled-components'

import variable from './variable'
import { ThemeProps } from './theme'
import getRem from './helper/getRem'
import { transition } from './mixin'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${variable.font.normal};
    background-color: ${({ theme }: ThemeProps) => theme.color.background};

    ${transition('background-color 500ms linear')}
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
    font-family: ${variable.font.bold};
    color: ${({ theme }: ThemeProps) => theme.color.text};

    ${transition('color 500ms linear')}
  }

  h2 {
    font-weight: bold;
    font-size: ${getRem(24)};
    font-family: ${variable.font.bold};
    color: ${({ theme }: ThemeProps) => theme.color.text};

    ${transition('color 500ms linear')}
  }

  h3 {
    font-weight: bold;
    font-size: ${getRem(19)};
    font-family: ${variable.font.bold};
    color: ${({ theme }: ThemeProps) => theme.color.text};

    ${transition('color 500ms linear')}
  }

  h4 {
    font-weight: bold;
    font-size: ${getRem(16)};
    font-family: ${variable.font.bold};
    color: ${({ theme }: ThemeProps) => theme.color.text};

    ${transition('color 500ms linear')}
  }

  h5 {
    font-weight: bold;
    font-size: ${getRem(13)};
    font-family: ${variable.font.bold};
    color: ${({ theme }: ThemeProps) => theme.color.text};

    ${transition('color 500ms linear')}
  }

  h6 {
    font-weight: bold;
    font-size: ${getRem(11)};
    font-family: ${variable.font.bold};
    color: ${({ theme }: ThemeProps) => theme.color.text};

    ${transition('color 500ms linear')}
  }
`

export default GlobalStyle
