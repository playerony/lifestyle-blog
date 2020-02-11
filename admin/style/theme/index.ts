import { ThemedStyledProps } from 'styled-components'

import dark from './dark'
import light from './light'

import { ITheme, EMode } from './theme.type'
import { IVariable } from '../variable/variable.type'

export type ThemeProps<P = {}> = ThemedStyledProps<P, { mode: ITheme, variable: IVariable }>

export default (mode: EMode = EMode.LIGHT): ITheme =>
  mode === EMode.LIGHT ? light : dark
