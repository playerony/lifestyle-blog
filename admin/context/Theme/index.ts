import { Context, createContext } from 'react'

import EThemeMode from '@type/common/EThemeMode'
import { IThemeContextProps } from './Theme.type'

const initialData: IThemeContextProps = {
  mode: EThemeMode.LIGHT,
  toggle: (checked: boolean) => {}
}

export const ThemeContext: Context<IThemeContextProps> = createContext(
  initialData
)
