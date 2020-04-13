import isSpecialCharacter from '../isSpecialCharacter'

describe('isSpecialCharacter Function', () => {
  it('import isSpecialCharacter', () => {
    expect(typeof isSpecialCharacter).toEqual('function')
  })

  it('should return true if passed string contain special character', () => {
    expect(isSpecialCharacter('1!3a')).toBeTruthy()
    expect(isSpecialCharacter('aB?D')).toBeTruthy()
    expect(isSpecialCharacter('@%na@3')).toBeTruthy()
    expect(isSpecialCharacter('%*#$!@#$%^&*')).toBeTruthy()
  })

  it('should return false if passed value does not contain special character', () => {
    expect(isSpecialCharacter([])).toBeFalsy()
    expect(isSpecialCharacter(NaN)).toBeFalsy()
    expect(isSpecialCharacter(123)).toBeFalsy()
    expect(isSpecialCharacter(null)).toBeFalsy()
    expect(isSpecialCharacter('nnn')).toBeFalsy()
    expect(isSpecialCharacter(undefined)).toBeFalsy()
    expect(isSpecialCharacter('asda12312asd')).toBeFalsy()
  })
})
