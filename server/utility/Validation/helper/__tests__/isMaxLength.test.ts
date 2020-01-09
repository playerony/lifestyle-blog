import isMaxLength from '../isMaxLength'

describe('isMaxLength Function', () => {
  it('should pass if passed data`s length is correct', () => {
    expect(isMaxLength('Test', 5)).toBeTruthy()
    expect(isMaxLength('T', 3)).toBeTruthy()
    expect(isMaxLength([1, 2, 3], 5)).toBeTruthy()
  })

  describe('shouldn`t pass', () => {
    it('if passed data`s length is too low', () => {
      expect(isMaxLength('Test', 3)).toBeFalsy()
      expect(isMaxLength([1, 2], 1)).toBeFalsy()
    })

    it('if passed data is not a string or array type', () => {
      expect(isMaxLength(NaN, 1)).toBeFalsy()
      expect(isMaxLength(null, 1)).toBeFalsy()
      expect(isMaxLength(undefined, 1)).toBeFalsy()
      expect(isMaxLength(123, 1)).toBeFalsy()
    })
  })
})
