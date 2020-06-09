import articleMapping from '../articleMapping'

import { ArticleType, ArticleModel } from '@type/Article'

describe('article Mapping', () => {
  it('import articleMapping', () => {
    expect(typeof articleMapping).toEqual('function')
  })

  it('should return proper object', () => {
    expect(articleMapping(INPUT_MOCK as any)).toEqual(OUTPUT_MOCK)
  })
})

const INPUT_MOCK: Partial<ArticleModel> = {
  likes: 1,
  userId: 1,
  imageId: 1,
  articleId: 1,
  title: 'title',
  isPublic: false,
  categoryList: null,
  content: 'content',
  description: 'description'
}

const OUTPUT_MOCK: ArticleType = {
  likes: 1,
  userId: 1,
  imageId: 1,
  image: null,
  articleId: 1,
  title: 'title',
  readingTime: 1,
  isPublic: false,
  categoryList: null,
  content: 'content',
  createdAt: undefined,
  updatedAt: undefined,
  description: 'description'
}
