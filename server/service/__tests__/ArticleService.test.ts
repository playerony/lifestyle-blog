const { dataTypes: DataTypes } = require('sequelize-test-helpers')

import { ArticleModel } from '@type/Article'

const bulkCreateMock = jest.fn()

jest.doMock('sequelize', () => {
  class Sequelize {}

  class Model {
    public static init = jest.fn()
    public static belongsTo = jest.fn()
    public static afterCreate = jest.fn()
    public static belongsToMany = jest.fn()
    public static bulkCreate = bulkCreateMock
    public static create = jest.fn().mockImplementation(() => ARTICLE_MOCK)
  }

  return {
    Model,
    DataTypes,
    Sequelize
  }
})

describe('ArticleService Service', () => {
  describe('create Method', () => {
    it('should return created articleId', async () => {
      const ArticleService = require('../ArticleService').default
      const articleService = new ArticleService()

      const result = await articleService.create(ARTICLE_MOCK, 1)

      expect(result).toEqual({ articleId: 1 })
    })
  })
})

const ARTICLE_MOCK: Partial<ArticleModel> = {
  userId: 1,
  imageId: 1,
  articleId: 1,
  title: '123',
  content: '123',
  description: '123'
}
