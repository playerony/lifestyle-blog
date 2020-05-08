import sortArticleList from '../sortArticleList'

describe('sortArticleList Function', () => {
  it('should import', () => {
    expect(typeof sortArticleList).toEqual('function')
  })

  it('should return empty array when provided article list is a falsy value', () => {
    expect(sortArticleList(null)).toEqual([])
    expect(sortArticleList(false)).toEqual([])
    expect(sortArticleList(undefined)).toEqual([])
  })

  it('should sort article list by totalVisitors property as default', () => {
    expect(sortArticleList(ARTICLE_LIST_MOCK)).toEqual([
      {
        likes: 30,
        totalComments: 30,
        totalVisitors: 100,
        createdAt: new Date('2018')
      },
      {
        likes: 8,
        totalComments: 2,
        totalVisitors: 10,
        createdAt: new Date('2021')
      },
      {
        likes: 15,
        totalComments: 4,
        totalVisitors: 6,
        createdAt: new Date('2020')
      }
    ])
  })

  it('should sort article list by likes property', () => {
    expect(sortArticleList(ARTICLE_LIST_MOCK, 'top-rated')).toEqual([
      {
        likes: 30,
        totalComments: 30,
        totalVisitors: 100,
        createdAt: new Date('2018')
      },
      {
        likes: 15,
        totalComments: 4,
        totalVisitors: 6,
        createdAt: new Date('2020')
      },
      {
        likes: 8,
        totalComments: 2,
        totalVisitors: 10,
        createdAt: new Date('2021')
      }
    ])
  })

  it('should sort article list by totalComments property', () => {
    expect(sortArticleList(ARTICLE_LIST_MOCK, 'most-commented')).toEqual([
      {
        likes: 30,
        totalComments: 30,
        totalVisitors: 100,
        createdAt: new Date('2018')
      },
      {
        likes: 15,
        totalComments: 4,
        totalVisitors: 6,
        createdAt: new Date('2020')
      },
      {
        likes: 8,
        totalComments: 2,
        totalVisitors: 10,
        createdAt: new Date('2021')
      }
    ])
  })

  it('should sort article list by createdAt property', () => {
    expect(sortArticleList(ARTICLE_LIST_MOCK, 'most-commented')).toEqual([
      {
        likes: 30,
        totalComments: 30,
        totalVisitors: 100,
        createdAt: new Date('2018')
      },
      {
        likes: 15,
        totalComments: 4,
        totalVisitors: 6,
        createdAt: new Date('2020')
      },
      {
        likes: 8,
        totalComments: 2,
        totalVisitors: 10,
        createdAt: new Date('2021')
      }
    ])
  })
})

const ARTICLE_LIST_MOCK = [
  {
    likes: 15,
    totalComments: 4,
    totalVisitors: 6,
    createdAt: new Date('2020')
  },
  {
    likes: 8,
    totalComments: 2,
    totalVisitors: 10,
    createdAt: new Date('2021')
  },
  {
    likes: 30,
    totalComments: 30,
    totalVisitors: 100,
    createdAt: new Date('2018')
  }
]
