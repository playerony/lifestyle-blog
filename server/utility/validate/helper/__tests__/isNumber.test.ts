import isNumber from '../isNumber'

describe('isNumber Function', () => {
  it('should return true if passed value is a number', () => {
    expect(isNumber(1)).toBeTruthy()
    expect(isNumber(0)).toBeTruthy()
    expect(isNumber(-50)).toBeTruthy()
    expect(isNumber(123)).toBeTruthy()
  })

  it('should return false if passed value is not a number', () => {
    expect(isNumber('')).toBeFalsy()
    expect(isNumber(NaN)).toBeFalsy()
    expect(isNumber(null)).toBeFalsy()
    expect(isNumber('123')).toBeFalsy()
    expect(isNumber('aasd')).toBeFalsy()
    expect(isNumber(undefined)).toBeFalsy()
  })
})
