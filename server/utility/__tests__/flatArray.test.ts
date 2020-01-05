import flatArray from '../flatArray'

describe('flatArray Function', () => {
  describe('should return empty array', () => {
    it('if array is not defined', () => {
      const result = flatArray(undefined)

      expect(result).toEqual([])
    })

    it('if array is a null value', () => {
      const result = flatArray(null)

      expect(result).toEqual([])
    })

    it('if array is empty', () => {
      const result = flatArray([])

      expect(result).toEqual([])
    })
  })

  it('should return passed array', () => {
    const array = [1, 2, 3]
    const result = flatArray(array)

    expect(result).toEqual(array)
  })

  it('should flat every depth of array', () => {
    const array = [1, 2, 3, [1, [2, [3, [4, [5, [6]]]]]]]
    const result = flatArray(array)

    expect(result).toEqual([1, 2, 3, 1, 2, 3, 4, 5, 6])
  })
})
