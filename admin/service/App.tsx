import React from 'react'
import { ThemeProvider } from 'styled-components'

import Routing from './Routing'

import theme from '@style/theme'
import ResetStyle from '@style/ResetStyle'
import GlobalStyle from '@style/GlobalStyle'

const App = (): JSX.Element => (
  <ThemeProvider theme={theme}>
    <>
      <ResetStyle />
      <GlobalStyle />
      <Routing />
    </>
  </ThemeProvider>
)

export default App
