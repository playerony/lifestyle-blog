import React from 'react'
import { ThemeProvider as Provider } from 'styled-components'

import { IThemeProviderProps } from './ThemeProvider.type'

import Memory from '@utility/Memory'

import getTheme from '@style/theme'
import variable from '@style/variable'

import { COLOR_MODE } from '@config/constant'

const ThemeProvider = ({ children }: IThemeProviderProps): JSX.Element => {
  const selectedTheme = getTheme(Number(Memory.get(COLOR_MODE)))

  console.warn(selectedTheme)

  return (
    <Provider theme={{ variable, mode: selectedTheme }}>
      {children}
    </Provider>
  )
}

export default ThemeProvider
