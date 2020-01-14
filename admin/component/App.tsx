import React from 'react'
import { ThemeProvider } from 'styled-components'

import Input from './generic/Input'

import theme from '@style/theme'
import ResetStyle from '@style/ResetStyle'
import GlobalStyle from '@style/GlobalStyle'

const App = (): JSX.Element => (
  <ThemeProvider theme={theme}>
    <>
      <ResetStyle />
      <GlobalStyle />
      <h1>Admin</h1>
      <Input label="Test label" />
    </>
  </ThemeProvider>
)

export default App
