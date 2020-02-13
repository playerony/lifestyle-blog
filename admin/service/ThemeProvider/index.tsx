import React, { useState } from 'react'
import { ThemeProvider as Provider } from 'styled-components'

import EThemeMode from '@type/common/EThemeMode'
import { IThemeProviderProps } from './ThemeProvider.type'

import { ManageThemeContext } from '@context/ManageTheme'

import getTheme from '@style/theme'

const ThemeProvider = ({ children }: IThemeProviderProps): JSX.Element => {
  const [themeMode, setThemeMode] = useState(EThemeMode.LIGHT)

  const toggle = (checked: boolean): void => {
    const mode = checked ? EThemeMode.DARK : EThemeMode.LIGHT

    setThemeMode(mode)
  }

  const theme = getTheme(themeMode)

  return (
    <ManageThemeContext.Provider value={{ mode: themeMode, toggle }}>
      <Provider theme={{ ...theme }}>
        {children}
      </Provider>
    </ManageThemeContext.Provider>
  )
}

export default ThemeProvider
