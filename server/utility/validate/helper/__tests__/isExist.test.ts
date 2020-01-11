import isExist from '../isExist'

describe('isExist Function', () => {
  it('should return true if passed value is truthy', () => {
    expect(isExist([])).toBeTruthy()
    expect(isExist(132)).toBeTruthy()
    expect(isExist('abcd')).toBeTruthy()
  })

  it('should return false if passed value is falsy', () => {
    expect(isExist(NaN)).toBeFalsy()
    expect(isExist(null)).toBeFalsy()
    expect(isExist(undefined)).toBeFalsy()
    expect(isExist('')).toBeFalsy()
    expect(isExist(0)).toBeFalsy()
  })
})
