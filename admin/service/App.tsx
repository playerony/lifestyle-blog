import React from 'react'

import Routing from './Routing'
import ThemeProvider from './ThemeProvider'
import ToastProvider from './ToastProvider'
import LoaderProvider from './LoaderProvider'
import GraphQLProvider from './GraphQLProvider'

import ResetStyle from '@style/ResetStyle'
import GlobalStyle from '@style/GlobalStyle'

import './SVG'

const App = (): JSX.Element => (
  <ToastProvider>
    <GraphQLProvider>
      <ThemeProvider>
        <LoaderProvider>
          <ResetStyle />
          <GlobalStyle />
          <Routing />
        </LoaderProvider>
      </ThemeProvider>
    </GraphQLProvider>
  </ToastProvider>
)

export default App
