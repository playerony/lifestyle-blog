import { ThemedStyledProps } from 'styled-components'

import dark from './dark'
import light from './light'

import { ITheme } from './theme.type'
import EThemeMode from '@type/common/EThemeMode'

export type ThemeProps<P = {}> = ThemedStyledProps<P, ITheme>

export default (mode: EThemeMode): ITheme =>
  mode === EThemeMode.LIGHT ? light : dark
