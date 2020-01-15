import React from 'react'
import { ThemeProvider } from 'styled-components'

import Loader from './common/Loader'

import theme from '@style/theme'
import ResetStyle from '@style/ResetStyle'
import GlobalStyle from '@style/GlobalStyle'

const App = (): JSX.Element => (
  <ThemeProvider theme={theme}>
    <>
      <ResetStyle />
      <GlobalStyle />
      <div
        style={{
          width: '100%',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Loader />
      </div>
    </>
  </ThemeProvider>
)

export default App
