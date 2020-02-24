import { ArticleType } from '@type/Article'

const bulkCreateMock = jest.fn()
const scopeCallMock = jest.fn()

jest.doMock('sequelize', () => {
  const { dataTypes: DataTypes } = require('sequelize-test-helpers')

  class Sequelize {}

  class Model {
    public static init = jest.fn()
    public static update = jest.fn()
    public static belongsTo = jest.fn()
    public static afterCreate = jest.fn()
    public static afterUpdate = jest.fn()
    public static belongsToMany = jest.fn()
    public static bulkCreate = bulkCreateMock
    public static scope = scopeCallMock.mockImplementation(() => Model)
    public static create = jest.fn().mockImplementation(() => ARTICLE_MOCK)
    public static findOne = jest.fn().mockImplementation(() => ARTICLE_MOCK)
    public static findAll = jest.fn().mockImplementation(() => [ARTICLE_MOCK])
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

      expect(result).toEqual(ARTICLE_MOCK)
    })
  })

  describe('update Method', () => {
    it('should return updated articleId', async () => {
      const ArticleService = require('../ArticleService').default
      const articleService = new ArticleService()

      const result = await articleService.update(1, ARTICLE_MOCK, 1)

      expect(result).toEqual(ARTICLE_MOCK)
    })
  })

  describe('findById Method', () => {
    it('should call scope method', async () => {
      const ArticleService = require('../ArticleService').default
      const articleService = new ArticleService()

      await articleService.findById(1)

      expect(scopeCallMock).toHaveBeenCalledWith([
        'withImage',
        'withCategoryList'
      ])
    })

    it('should return found article', async () => {
      const ArticleService = require('../ArticleService').default
      const articleService = new ArticleService()

      const result = await articleService.findById(1)

      expect(result).toEqual(ARTICLE_MOCK)
    })
  })

  describe('findAll Method', () => {
    it('should call scope method', async () => {
      const ArticleService = require('../ArticleService').default
      const articleService = new ArticleService()

      await articleService.findAll()

      expect(scopeCallMock).toHaveBeenCalledWith([
        'withImage',
        'withCategoryList'
      ])
    })

    it('should return found article list', async () => {
      const ArticleService = require('../ArticleService').default
      const articleService = new ArticleService()

      const result = await articleService.findAll()

      expect(result).toEqual([ARTICLE_MOCK])
    })
  })
})

const ARTICLE_MOCK: ArticleType = {
  userId: 1,
  imageId: 1,
  image: null,
  articleId: 1,
  title: '123',
  content: '123',
  categoryList: [],
  description: '123',
  createdAt: new Date('2019'),
  updatedAt: new Date('2019')
}
