import articleMapping from '../articleMapping'

import { ArticleType, ArticleModel } from '@type/Article'

describe('articleMapping Mapping', () => {
  it('should return proper object', () => {
    expect(articleMapping(INPUT_MOCK as any)).toEqual(OUTPUT_MOCK)
  })
})

const INPUT_MOCK: Partial<ArticleModel> = {
  userId: 1,
  imageId: 1,
  articleId: 1,
  title: 'Title',
  isPublic: false,
  categoryList: null,
  content: 'Content',
  description: 'Descr',
}

const OUTPUT_MOCK: ArticleType = {
  userId: 1,
  imageId: 1,
  image: null,
  articleId: 1,
  title: 'Title',
  isPublic: false,
  categoryList: null,
  content: 'Content',
  description: 'Descr',
  createdAt: undefined,
  updatedAt: undefined
}
