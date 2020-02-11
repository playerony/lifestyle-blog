import React, { Suspense } from 'react'

import LoadingPage from '@page/Loading'

import Routing from './Routing'
import ThemeProvider from './ThemeProvider'
import GraphQLProvider from './GraphQLProvider'

import ResetStyle from '@style/ResetStyle'
import GlobalStyle from '@style/GlobalStyle'

import './SVG'

const App = (): JSX.Element => (
  <GraphQLProvider>
    <ThemeProvider>
      <Suspense fallback={<LoadingPage />}>
        <ResetStyle />
        <GlobalStyle />
        <Routing />
      </Suspense>
    </ThemeProvider>
  </GraphQLProvider>
)

export default App
