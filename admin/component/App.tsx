import * as React from 'react'
import { ThemeProvider } from 'styled-components'

import Input from './generic/Input'

import theme from '@style/theme'
import ResetStyle from '@style/ResetStyle'

const App = (): JSX.Element => (
  <ThemeProvider theme={theme}>
    <>
      <ResetStyle />
      <h1>Admin</h1>
      <Input />
    </>
  </ThemeProvider>
)

export default App
