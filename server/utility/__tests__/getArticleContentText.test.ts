import generateString from '../generateString'
import getArticleContentText from '../getArticleContentText'

describe('getArticleContentText Function', () => {
  it('should import', () => {
    expect(typeof getArticleContentText).toEqual('function')
  })

  describe('return empty string case', () => {
    it('when passed content is not defined', () => {
      const result = getArticleContentText(undefined)

      expect(result).toEqual('')
    })

    it('when passed content is not an object', () => {
      const result = getArticleContentText('123')

      expect(result).toEqual('')
    })

    it('when passed content`s object does not contain blocks property', () => {
      const result = getArticleContentText(
        JSON.stringify({ otherKey: 'otherKey' })
      )

      expect(result).toEqual('')
    })
  })

  it('should return concated article text', () => {
    const longContentText = generateString(250)
    const result = getArticleContentText(
      JSON.stringify({
        blocks: [{ text: longContentText }, { text: longContentText }]
      })
    )

    expect(result).toEqual([longContentText, longContentText].join(''))
  })
})
