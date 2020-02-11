import React, { useState, useContext, createContext } from 'react'

import { EMode } from '@style/theme/theme.type'

export const ManageThemeContext: React.Context<{
  mode: string,
  toggle: () => void
}> = createContext({
  mode: '',
  toggle: () => { }
});

export const useTheme = () => useContext(ManageThemeContext);

export const ThemeManager = ({ children }: any): JSX.Element => {
  const [themeMode, setThemeMode] = useState(EMode.DARK)

  const toggle = (): void => {
    const mode = themeMode === EMode.DARK ? EMode.LIGHT : EMode.DARK

    setThemeMode(mode)
  }

  return (
    <ManageThemeContext.Provider value={{ mode: themeMode, toggle }}>
      {children}
    </ManageThemeContext.Provider>
  );
}