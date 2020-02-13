import EThemeMode from '../EThemeMode'

describe('EThemeMode Enum', () => {
  it('should contain two options', () => {
    expect(Object.keys(EThemeMode)).toHaveLength(2)
  })

  it('should contain DARK property', () => {
    expect(EThemeMode.DARK).toEqual('DARK')
  })

  it('should contain LIGHT property', () => {
    expect(EThemeMode.LIGHT).toEqual('LIGHT')
  })
})
