import React from 'react'

import Routing from './Routing'
import ThemeProvider from './ThemeProvider'
import ToastProvider from './ToastProvider'
import LoadingProvider from './LoadingProvider'
import GraphQLProvider from './GraphQLProvider'

import ResetStyle from '@style/ResetStyle'
import GlobalStyle from '@style/GlobalStyle'

import './SVG'

const App = (): JSX.Element => (
  <ToastProvider>
    <GraphQLProvider>
      <ThemeProvider>
        <LoadingProvider>
          <ResetStyle />
          <GlobalStyle />
          <Routing />
        </LoadingProvider>
      </ThemeProvider>
    </GraphQLProvider>
  </ToastProvider>
)

export default App
