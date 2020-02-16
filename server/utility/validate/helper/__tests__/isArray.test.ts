import isArray from '../isArray'

describe('isArray Function', () => {
  it('should return true if passed value is an array', () => {
    expect(isArray([])).toBeTruthy()
    expect(isArray(new Array(10).fill(10))).toBeTruthy()
  })

  it('should return false if passed value is not an array', () => {
    expect(isArray(123)).toBeFalsy()
    expect(isArray(NaN)).toBeFalsy()
    expect(isArray(true)).toBeFalsy()
    expect(isArray(null)).toBeFalsy()
    expect(isArray('Test')).toBeFalsy()
    expect(isArray(undefined)).toBeFalsy()
  })
})
