import { createGlobalStyle } from 'styled-components'

import variable from './variable'
import { ThemeProps } from './theme'
import getRem from './helper/getRem'
import { transition, respondTo } from './mixin'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${variable.font.normal};
    background-color: ${({ theme }: ThemeProps) => theme.color.background};

    ${transition('background-color 500ms linear')}
  }

  label {
    font-size: ${getRem(24)};
    color: ${({ theme }: ThemeProps) => theme.color.text};

    ${respondTo.largeScreen`
      font-size: ${getRem(22)};
    `}

    ${respondTo.mediumScreen`
      font-size: ${getRem(20)};
    `}

    ${respondTo.smallScreen`
      font-size: ${getRem(19)};
    `}

    ${respondTo.mobileScreen`
      font-size: ${getRem(18)};
    `}
  }

  p {
    font-size: ${getRem(18)};
    color: ${({ theme }: ThemeProps) => theme.color.text};

    ${respondTo.largeScreen`
      font-size: ${getRem(16)};
    `}

    ${respondTo.mediumScreen`
      font-size: ${getRem(14)};
    `}

    ${respondTo.smallScreen`
      font-size: ${getRem(13)};
    `}

    ${respondTo.mobileScreen`
      font-size: ${getRem(12)};
    `}
  }

  h1 {
    font-weight: bold;
    font-size: ${getRem(36)};
    font-family: ${variable.font.bold};
    color: ${({ theme }: ThemeProps) => theme.color.text};

    ${transition('color 500ms linear')}

    ${respondTo.largeScreen`
      font-size: ${getRem(34)};
    `}

    ${respondTo.mediumScreen`
      font-size: ${getRem(32)};
    `}

    ${respondTo.smallScreen`
      font-size: ${getRem(31)};
    `}

    ${respondTo.mobileScreen`
      font-size: ${getRem(30)};
    `}
  }

  h2 {
    font-weight: bold;
    font-size: ${getRem(28)};
    font-family: ${variable.font.bold};
    color: ${({ theme }: ThemeProps) => theme.color.text};

    ${transition('color 500ms linear')}

    ${respondTo.largeScreen`
      font-size: ${getRem(26)};
    `}

    ${respondTo.mediumScreen`
      font-size: ${getRem(24)};
    `}

    ${respondTo.smallScreen`
      font-size: ${getRem(23)};
    `}

    ${respondTo.mobileScreen`
      font-size: ${getRem(22)};
    `}
  }

  h3 {
    font-weight: bold;
    font-size: ${getRem(23)};
    font-family: ${variable.font.bold};
    color: ${({ theme }: ThemeProps) => theme.color.text};

    ${transition('color 500ms linear')}

    ${respondTo.largeScreen`
      font-size: ${getRem(21)};
    `}

    ${respondTo.mediumScreen`
      font-size: ${getRem(19)};
    `}

    ${respondTo.smallScreen`
      font-size: ${getRem(18)};
    `}

    ${respondTo.mobileScreen`
      font-size: ${getRem(17)};
    `}
  }

  h4 {
    font-weight: bold;
    font-size: ${getRem(20)};
    font-family: ${variable.font.bold};
    color: ${({ theme }: ThemeProps) => theme.color.text};

    ${transition('color 500ms linear')}

    ${respondTo.largeScreen`
      font-size: ${getRem(18)};
    `}

    ${respondTo.mediumScreen`
      font-size: ${getRem(16)};
    `}

    ${respondTo.smallScreen`
      font-size: ${getRem(15)};
    `}

    ${respondTo.mobileScreen`
      font-size: ${getRem(14)};
    `}
  }

  h5 {
    font-weight: bold;
    font-size: ${getRem(17)};
    font-family: ${variable.font.bold};
    color: ${({ theme }: ThemeProps) => theme.color.text};

    ${transition('color 500ms linear')}

    ${respondTo.largeScreen`
      font-size: ${getRem(15)};
    `}

    ${respondTo.mediumScreen`
      font-size: ${getRem(13)};
    `}

    ${respondTo.smallScreen`
      font-size: ${getRem(12)};
    `}

    ${respondTo.mobileScreen`
      font-size: ${getRem(11)};
    `}
  }

  h6 {
    font-weight: bold;
    font-size: ${getRem(15)};
    font-family: ${variable.font.bold};
    color: ${({ theme }: ThemeProps) => theme.color.text};

    ${transition('color 500ms linear')}

    ${respondTo.largeScreen`
      font-size: ${getRem(13)};
    `}

    ${respondTo.mediumScreen`
      font-size: ${getRem(11)};
    `}

    ${respondTo.smallScreen`
      font-size: ${getRem(10)};
    `}

    ${respondTo.mobileScreen`
      font-size: ${getRem(9)};
    `}
  }
`

export default GlobalStyle
