import React from 'react'
import { ThemeProvider } from 'styled-components'

import light from '@style/theme/light'

interface IThemeProviderMockProps {
  children: React.ReactElement
}

const ThemeProviderMock = ({ children }: IThemeProviderMockProps): JSX.Element => (
  <ThemeProvider theme={{ ...light }}>
    {children}
  </ThemeProvider>
)

export default ThemeProviderMock
