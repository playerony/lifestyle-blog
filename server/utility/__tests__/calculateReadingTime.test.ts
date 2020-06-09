import generateString from '../generateString'
import calculateReadingTime from '../calculateReadingTime'

describe('calculateReadingTime Function', () => {
  it('should import', () => {
    expect(typeof calculateReadingTime).toEqual('function')
  })

  describe('return 0 case', () => {
    it('when passed content is not defined', () => {
      const result = calculateReadingTime(undefined)

      expect(result).toEqual(0)
    })

    it('when passed content is not an object', () => {
      const result = calculateReadingTime('123')

      expect(result).toEqual(1)
    })

    it('when passed content`s object does not contain blocks property', () => {
      const result = calculateReadingTime(
        JSON.stringify({ otherKey: 'otherKey' })
      )

      expect(result).toEqual(1)
    })
  })

  it('should return proper reading time', () => {
    const longContentText = generateString(250)
    const result = calculateReadingTime(
      JSON.stringify({
        blocks: [{ text: longContentText }, { text: longContentText }]
      })
    )

    expect(result).toEqual(1)
  })
})
