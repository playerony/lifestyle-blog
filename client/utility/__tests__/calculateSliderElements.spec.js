import calculateSliderElements from '../calculateSliderElements'

describe('calculateSliderElements Function', () => {
  it('should import', () => {
    expect(typeof calculateSliderElements).toEqual('function')
  })

  it('should return array length if it`s shorter than provided max value', () => {
    expect(calculateSliderElements([1, 2], 5)).toEqual(2)
  })

  it('should return max length if it`s longer than provided array length', () => {
    expect(calculateSliderElements([1, 2], 1)).toEqual(1)
  })
})
