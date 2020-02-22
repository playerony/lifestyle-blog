import IArticle from '@type/article/IArticle'
import IVisitor from '@type/visitor/IVisitor'

import articleListTransformator from '../articleListTransformator'

describe('articleListTransformator Transformator', () => {
  it('should return empty array if no data passed', () => {
    expect(articleListTransformator()).toEqual([])
  })

  it('should return empty array if object props do not exists', () => {
    expect(
      articleListTransformator({
        articleList: undefined,
        visitorList: undefined
      } as any)
    ).toEqual([])
  })

  it('should proper calculate amount of total and today visitors', () => {
    const result = articleListTransformator({
      articleList: ARTICLE_LIST_MOCK,
      visitorList: VISITOR_LIST_MOCK
    })

    expect(result).toHaveLength(1)
    expect(result[0].todayVisitor).toEqual(2)
    expect(result[0].totalVisitor).toEqual(5)
  })

  it('should return provided articleList if visitorList does not exist', () => {
    const result = articleListTransformator({
      articleList: ARTICLE_LIST_MOCK,
      visitorList: []
    })

    expect(result).toEqual(ARTICLE_LIST_MOCK)
  })
})

const ARTICLE_LIST_MOCK: IArticle[] = [
  {
    userId: 1,
    imageId: 1,
    articleId: 1,
    categoryList: [],
    image: undefined,
    title: 'title 1',
    content: 'content 1',
    description: 'description 1',
    createdAt: new Date('2020')
  }
]

const VISITOR_LIST_MOCK: IVisitor[] = [
  {
    articleId: 1,
    createdAt: new Date()
  },
  {
    articleId: 1,
    createdAt: new Date()
  },
  {
    createdAt: new Date()
  },
  {
    createdAt: new Date()
  },
  {
    articleId: 1,
    createdAt: new Date('2017')
  },
  {
    articleId: 1,
    createdAt: new Date('2018')
  },
  {
    articleId: 1,
    createdAt: new Date('2019')
  },
  {
    articleId: 2,
    createdAt: new Date()
  }
]
