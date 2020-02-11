import React from 'react'
import { ThemeProvider as Provider } from 'styled-components'

import { IThemeProviderProps } from './ThemeProvider.type'

import { useTheme } from '../ThemeManager'

import getTheme from '@style/theme'
import variable from '@style/variable'
import { EMode } from '@style/theme/theme.type'


const ThemeProvider = ({ children }: IThemeProviderProps): JSX.Element => {
  const { mode } = useTheme()

  const selectedTheme = getTheme(mode as EMode)

  console.warn(selectedTheme)

  return (
    <Provider theme={{ variable, mode: selectedTheme }}>
      {children}
    </Provider>
  )
}

export default ThemeProvider
