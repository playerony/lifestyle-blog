import isString from '../isString'

describe('isString Function', () => {
  it('import isString', () => {
    expect(typeof isString).toEqual('function')
  })

  it('should return true if passed value`s type is a string', () => {
    expect(isString('')).toBeTruthy()
    expect(isString((123).toString())).toBeTruthy()
    expect(isString('A bit longer string')).toBeTruthy()
    expect(isString(String('Another test'))).toBeTruthy()
    expect(
      isString(new String('String represented by class object'))
    ).toBeTruthy()
  })

  it('should return false if passed value`s type is not a string', () => {
    expect(isString(NaN)).toBeFalsy()
    expect(isString(null)).toBeFalsy()
    expect(isString(undefined)).toBeFalsy()
  })
})
