import articleTransformator from '../articleTransformator'

describe('articleTransformator Function', () => {
  it('should import', () => {
    expect(typeof articleTransformator).toEqual('function')
  })

  it('should return empty object if one of passed params is undefined', () => {
    expect(articleTransformator(undefined, undefined, undefined)).toEqual({})
  })

  it('should proper calculate article visitors and comments for total and today', () => {
    expect(
      articleTransformator(2, VISITOR_LIST_MOCK, COMMENT_LIST_MOCK)
    ).toEqual({
      todayComments: 5,
      todayVisitors: 1,
      totalComments: 8,
      totalVisitors: 1
    })
  })
})

const VISITOR_LIST_MOCK = [
  {
    articleId: 7,
    createdAt: new Date()
  },
  {
    articleId: 7,
    createdAt: new Date()
  },
  {
    createdAt: new Date()
  },
  {
    createdAt: new Date()
  },
  {
    articleId: 6,
    createdAt: new Date('2017')
  },
  {
    articleId: 7,
    createdAt: new Date('2018')
  },
  {
    articleId: 7,
    createdAt: new Date('2019')
  },
  {
    articleId: 2,
    createdAt: new Date()
  }
]

const COMMENT_LIST_MOCK = [
  {
    articleId: 7,
    createdAt: new Date()
  },
  {
    articleId: 7,
    createdAt: new Date()
  },
  {
    articleId: 7,
    createdAt: new Date()
  },
  {
    createdAt: new Date()
  },
  {
    articleId: 6,
    createdAt: new Date('2017')
  },
  {
    articleId: 7,
    createdAt: new Date('2018')
  },
  {
    articleId: 7,
    createdAt: new Date('2019')
  },
  {
    articleId: 2,
    createdAt: new Date()
  }
]
