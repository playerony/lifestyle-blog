import formatArticleDate from '../formatArticleDate'

describe('formatArticleDate Function', () => {
  it('should import', () => {
    expect(typeof formatArticleDate).toEqual('function')
  })

  it('should return well formatted date', () => {
    expect(formatArticleDate(new Date('2020'))).toEqual('Jan 01, 2020')
  })
})
