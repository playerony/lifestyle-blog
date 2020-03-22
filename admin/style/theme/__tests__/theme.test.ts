import getTheme from '..'
import dark from '../dark'
import light from '../light'

import EThemeMode from '@type/common/EThemeMode'

describe('getTheme Function', () => {
  it('import getTheme', () => {
    expect(typeof getTheme).toEqual('function')
  })

  it('should return dark theme', () => {
    expect(getTheme(EThemeMode.DARK)).toEqual(dark)
  })

  it('should return light theme', () => {
    expect(getTheme(EThemeMode.LIGHT)).toEqual(light)
  })
})
