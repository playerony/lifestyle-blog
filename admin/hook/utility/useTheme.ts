import { useContext } from 'react'

import { ManageThemeContext } from '@context/ManageTheme'

const useTheme = () => useContext(ManageThemeContext)

export default useTheme
