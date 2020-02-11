import React from 'react'
import { ThemeProvider as Provider } from 'styled-components'

import variable from '@style/variable'
import light from '@style/theme/light'

interface IThemeProviderMockProps {
  children: React.ReactElement
}

const ThemeProvider = ({ children }: IThemeProviderMockProps): JSX.Element => (
  <Provider theme={{ variable, mode: light }}>
    {children}
  </Provider>
)

export default ThemeProvider
