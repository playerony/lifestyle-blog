import isMinLength from '../isMinLength'

describe('isMinLength Function', () => {
  it('should pass if passed data`s length is correct', () => {
    expect(isMinLength('Test', 1)).toBeTruthy()
    expect(isMinLength('T', 1)).toBeTruthy()
    expect(isMinLength([1, 2, 3], 2)).toBeTruthy()
  })

  describe('shouldn`t pass', () => {
    it('if passed data`s length is too low', () => {
      expect(isMinLength('Test', 5)).toBeFalsy()
      expect(isMinLength([1, 2], 4)).toBeFalsy()
    })

    it('if passed data is not a string or array type', () => {
      expect(isMinLength(NaN, 1)).toBeFalsy()
      expect(isMinLength(null, 1)).toBeFalsy()
      expect(isMinLength(undefined, 1)).toBeFalsy()
      expect(isMinLength(123, 1)).toBeFalsy()
    })
  })
})
