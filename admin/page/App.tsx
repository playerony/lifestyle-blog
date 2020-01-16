import React from 'react'
import { ThemeProvider } from 'styled-components'

import LoadingPage from './LoadingPage'

import theme from '@style/theme'
import ResetStyle from '@style/ResetStyle'
import GlobalStyle from '@style/GlobalStyle'

const App = (): JSX.Element => (
  <ThemeProvider theme={theme}>
    <>
      <ResetStyle />
      <GlobalStyle />
      <LoadingPage />
    </>
  </ThemeProvider>
)

export default App
