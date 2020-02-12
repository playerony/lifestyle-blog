import { createGlobalStyle } from 'styled-components'

import getRem from './helper/getRem'
import variable from '@style/variable'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${variable.font.normal};
    background-color: ${variable.color.background};
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
    color: ${variable.color.black};
    font-family: ${variable.font.bold};
  }

  h2 {
    font-weight: bold;
    font-size: ${getRem(24)};
    color: ${variable.color.black};
    font-family: ${variable.font.bold};
  }

  h3 {
    font-weight: bold;
    font-size: ${getRem(19)};
    color: ${variable.color.black};
    font-family: ${variable.font.bold};
  }

  h4 {
    font-weight: bold;
    font-size: ${getRem(16)};
    color: ${variable.color.black};
    font-family: ${variable.font.bold};
  }

  h5 {
    font-weight: bold;
    font-size: ${getRem(13)};
    color: ${variable.color.black};
    font-family: ${variable.font.bold};
  }

  h6 {
    font-weight: bold;
    font-size: ${getRem(11)};
    color: ${variable.color.black};
    font-family: ${variable.font.bold};
  }
`

export default GlobalStyle
