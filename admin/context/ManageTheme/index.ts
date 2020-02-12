import { Context, createContext } from 'react'

import EThemeMode from '@type/common/EThemeMode'
import { IManageTheme } from './ManageTheme.type'

const initialData: IManageTheme = {
  mode: EThemeMode.LIGHT,
  toggle: (checked: boolean) => { }
}

const ManageThemeContext: Context<IManageTheme> = createContext(initialData)

export default ManageThemeContext
