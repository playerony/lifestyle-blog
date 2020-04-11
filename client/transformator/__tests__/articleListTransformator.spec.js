import articleListTransformator from '../articleListTransformator'

describe('articleListTransformator Function', () => {
  it('should import', () => {
    expect(typeof articleListTransformator).toEqual('function')
  })

  it('should return empty array if passed params are undefined', () => {
    expect(articleListTransformator(undefined, undefined)).toEqual([])
  })

  it('should proper calculate amount of total visitors', () => {
    const result = articleListTransformator(
      ARTICLE_LIST_MOCK,
      VISITOR_LIST_MOCK
    )

    expect(result).toHaveLength(1)
    expect(result[0].totalVisitor).toEqual(1)
  })
})

const ARTICLE_LIST_MOCK = [
  {
    articleId: 7,
    title: 'title',
    readingTime: 1,
    isPublic: false,
    description: 'description',
    createdAt: new Date('2020'),
    image: {
      photoUrl: 'photoUrl'
    }
  }
]

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
