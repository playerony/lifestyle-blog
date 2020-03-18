import { useContext } from 'react'

import { ThemeContext } from '@context/Theme'

const useTheme = () => useContext(ThemeContext)

export default useTheme
