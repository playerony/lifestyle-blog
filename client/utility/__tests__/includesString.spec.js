import includesString from '../includesString'

describe('includesString Function', () => {
  it('should import', () => {
    expect(typeof includesString).toEqual('function')
  })

  it('should return true for falsy values', () => {
    expect(includesString(null, null)).toBeTruthy()
  })

  it('should trim and check verify one value contains another', () => {
    expect(includesString('  ABC  ', ' abc ')).toBeTruthy()
  })

  it('should return false when provided string does not include in the other one', () => {
    expect(includesString('abc', '123')).toBeFalsy()
  })
})
