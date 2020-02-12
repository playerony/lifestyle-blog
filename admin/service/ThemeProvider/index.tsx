import React, { useState } from 'react'
import { ThemeProvider as Provider } from 'styled-components'

import EThemeMode from '@type/common/EThemeMode'
import { IThemeProviderProps } from './ThemeProvider.type'

import { ManageThemeContext } from '@context/ManageTheme'

import getTheme from '@style/theme'

const ThemeProvider = ({ children }: IThemeProviderProps): JSX.Element => {
  const [themeMode, setThemeMode] = useState(EThemeMode.LIGHT)

  const toggle = (): void => {
    const mode = themeMode === EThemeMode.DARK ? EThemeMode.LIGHT : EThemeMode.DARK

    setThemeMode(mode)
  }

  const selectedTheme = getTheme(themeMode)

  return (
    <ManageThemeContext.Provider value={{ mode: themeMode, toggle }}>
      <Provider theme={{ selectedTheme }}>
        {children}
      </Provider>
    </ManageThemeContext.Provider>
  )
}

export default ThemeProvider
