import isEqual from '../isEqual'

describe('isEqual Function', () => {
  it('import isEqual', () => {
    expect(typeof isEqual).toEqual('function')
  })

  it('should return true if passed values are equal', () => {
    expect(isEqual([], [])).toBeTruthy()
    expect(isEqual(132, 132)).toBeTruthy()
    expect(isEqual('abcd', 'abcd')).toBeTruthy()
  })

  it('should return false if passed values are not equal', () => {
    expect(isEqual(0, '0')).toBeFalsy()
    expect(isEqual('', '1')).toBeFalsy()
    expect(isEqual(NaN, null)).toBeFalsy()
    expect(isEqual(undefined, [])).toBeFalsy()
    expect(isEqual(null, undefined)).toBeFalsy()
  })
})
