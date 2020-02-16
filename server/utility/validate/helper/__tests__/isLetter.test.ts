import isLetter from '../isLetter'

describe('isLetter Function', () => {
  it('should return true if passed string contain small letter', () => {
    expect(isLetter('123a')).toBeTruthy()
    expect(isLetter('aBcD')).toBeTruthy()
    expect(isLetter('aaaa')).toBeTruthy()
    expect(isLetter('@%na@3')).toBeTruthy()
  })

  it('should return false', () => {
    expect(isLetter([])).toBeFalsy()
    expect(isLetter(NaN)).toBeFalsy()
    expect(isLetter(123)).toBeFalsy()
    expect(isLetter(null)).toBeFalsy()
    expect(isLetter('123')).toBeFalsy()
    expect(isLetter('%^!@')).toBeFalsy()
    expect(isLetter(undefined)).toBeFalsy()
  })
})
