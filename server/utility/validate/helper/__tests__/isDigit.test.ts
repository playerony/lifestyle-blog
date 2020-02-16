import isDigit from '../isDigit'

describe('isDigit Function', () => {
  it('should return true if passed string contain digit', () => {
    expect(isDigit('123a')).toBeTruthy()
    expect(isDigit('aB1D')).toBeTruthy()
    expect(isDigit('1997')).toBeTruthy()
    expect(isDigit('@%na@3')).toBeTruthy()
  })

  it('should return false', () => {
    expect(isDigit([])).toBeFalsy()
    expect(isDigit(NaN)).toBeFalsy()
    expect(isDigit(123)).toBeFalsy()
    expect(isDigit(null)).toBeFalsy()
    expect(isDigit('nnn')).toBeFalsy()
    expect(isDigit('%^!@')).toBeFalsy()
    expect(isDigit(undefined)).toBeFalsy()
  })
})
