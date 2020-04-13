import ArticleService from '../ArticleService'

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

const setUp = (): ArticleService => {
  const ArticleService = require('../ArticleService').default

  return new ArticleService()
}

describe('Article Service', () => {
  describe('create Method', () => {
    it('should return created articleId', async () => {
      const articleService = setUp()

      const result = await articleService.create(ARTICLE_MOCK, 1)

      expect(result).toEqual(ARTICLE_MOCK)
    })
  })

  describe('update Method', () => {
    it('should return updated articleId', async () => {
      const articleService = setUp()

      const result = await articleService.update(1, ARTICLE_MOCK, 1)

      expect(result).toEqual(ARTICLE_MOCK)
    })
  })

  describe('togglePublicFlag Method', () => {
    it('should return updated articleId', async () => {
      const articleService = setUp()

      const result = await articleService.togglePublicFlag(1, false)

      expect(result).toEqual(ARTICLE_MOCK)
    })
  })

  describe('findById Method', () => {
    it('should call scope method', async () => {
      const articleService = setUp()

      await articleService.findById(1)

      expect(scopeCallMock).toHaveBeenCalledWith([
        'withImage',
        'withCategoryList'
      ])
    })

    it('should return found article', async () => {
      const articleService = setUp()

      const result = await articleService.findById(1)

      expect(result).toEqual(ARTICLE_MOCK)
    })
  })

  describe('findAll Method', () => {
    it('should call scope method', async () => {
      const articleService = setUp()

      await articleService.findAll()

      expect(scopeCallMock).toHaveBeenCalledWith([
        'withImage',
        'withCategoryList'
      ])
    })

    it('should return found article list', async () => {
      const articleService = setUp()

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
  isPublic: false,
  readingTime: 0,
  categoryList: [],
  description: '123',
  createdAt: new Date('2019'),
  updatedAt: new Date('2019')
}
