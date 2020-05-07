import containString from '../containString'

describe('containString Function', () => {
  it('should import', () => {
    expect(typeof containString).toEqual('function')
  })

  it('should return true for falsy values', () => {
    expect(containString(null, null)).toBeTruthy()
  })

  it('should trim and check verify one value contains another', () => {
    expect(containString('  ABC  ', ' abc ')).toBeTruthy()
  })

  it('should return false when provided string does not include in the other one', () => {
    expect(containString('abc', '123')).toBeFalsy()
  })
})
