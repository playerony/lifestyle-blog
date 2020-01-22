import React, { Suspense } from 'react'
import { ThemeProvider } from 'styled-components'

import LoadingPage from '@page/LoadingPage'

import Routing from './Routing'
import GraphQLProvider from './GraphQLProvider'

import theme from '@style/theme'
import ResetStyle from '@style/ResetStyle'
import GlobalStyle from '@style/GlobalStyle'

const App = (): JSX.Element => (
  <GraphQLProvider>
    <ThemeProvider theme={theme}>
      <Suspense fallback={<LoadingPage />}>
        <ResetStyle />
        <GlobalStyle />
        <Routing />
      </Suspense>
    </ThemeProvider>
  </GraphQLProvider>
)

export default App