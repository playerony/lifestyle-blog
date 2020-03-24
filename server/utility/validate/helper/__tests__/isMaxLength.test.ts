import isMaxLength from '../isMaxLength'

describe('isMaxLength Function', () => {
  it('import isMaxLength', () => {
    expect(typeof isMaxLength).toEqual('function')
  })

  it('should pass if passed data`s length is correct', () => {
    expect(isMaxLength('T', 3)).toBeTruthy()
    expect(isMaxLength('Test', 5)).toBeTruthy()
    expect(isMaxLength([1, 2, 3], 5)).toBeTruthy()
  })

  describe('should not pass', () => {
    it('if passed data`s length is too low', () => {
      expect(isMaxLength('Test', 3)).toBeFalsy()
      expect(isMaxLength([1, 2], 1)).toBeFalsy()
    })

    it('if passed data is not a string or array type', () => {
      expect(isMaxLength(123, 1)).toBeFalsy()
      expect(isMaxLength(NaN, 1)).toBeFalsy()
      expect(isMaxLength(null, 1)).toBeFalsy()
      expect(isMaxLength(undefined, 1)).toBeFalsy()
    })
  })
})
