import IVisitor from '@type/visitor/IVisitor'

import calculateArticleListVisitors from '../calculateArticleListVisitors'

describe('calculateArticleListVisitors Function', () => {
  it('import calculateArticleListVisitors', () => {
    expect(typeof calculateArticleListVisitors).toEqual('function')
  })

  describe('should return zero', () => {
    it('for empty array', () => {
      const result = calculateArticleListVisitors([])

      expect(result).toEqual(0)
    })

    it('for article page visitors', () => {
      const result = calculateArticleListVisitors(VISITOR_LIST_MOCK)

      expect(result).toEqual(0)
    })
  })

  it('should return number of article page visitors', () => {
    const result = calculateArticleListVisitors(ARTICLE_PAGE_VISITOR_LIST_MOCK)

    expect(result).toEqual(2)
  })
})

const ARTICLE_PAGE_VISITOR_LIST_MOCK: IVisitor[] = [
  {
    articleId: null,
    ipAddress: 'ipAddress1'
  },
  {
    articleId: null,
    ipAddress: 'ipAddress2'
  }
]

const VISITOR_LIST_MOCK: IVisitor[] = [
  {
    articleId: 1,
    ipAddress: 'ipAddress1'
  },
  {
    articleId: 2,
    ipAddress: 'ipAddress2'
  },
  {
    articleId: 3,
    ipAddress: 'ipAddress1'
  },
  {
    articleId: 3,
    ipAddress: 'ipAddress2'
  },
  {
    articleId: 3,
    ipAddress: 'ipAddress2'
  }
]
