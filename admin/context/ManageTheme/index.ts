import { Context, createContext } from 'react'

import EThemeMode from '@type/common/EThemeMode'
import { IManageThemeProps } from './ManageTheme.type'

const initialData: IManageThemeProps = {
  mode: EThemeMode.LIGHT,
  toggle: (checked: boolean) => { }
}

export const ManageThemeContext: Context<IManageThemeProps> = createContext(initialData)
