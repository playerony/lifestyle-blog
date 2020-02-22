import React from 'react'
import { ThemeProvider } from 'styled-components'

import { IThemeProviderMockProps } from './ThemeProviderMock.type'

import light from '@style/theme/light'

const ThemeProviderMock = ({ children }: IThemeProviderMockProps): JSX.Element => (
  <ThemeProvider theme={{ ...light }}>
    {children}
  </ThemeProvider>
)

export default ThemeProviderMock
