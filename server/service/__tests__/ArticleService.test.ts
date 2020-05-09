import Substitute, { Arg } from '@fluffy-spoon/substitute'

import CategoryService from '@service/CategoryService'

import { ArticleType } from '@type/Article'
import { CategoryType } from '@type/Category'

const _CategoryService = Substitute.for<CategoryService>()

const bulkCreateMock = jest.fn()
const scopeCallMock = jest.fn()
const findArticleMock = jest.fn().mockImplementation(() => ARTICLE_MOCK)
const findAllArticlesMock = jest.fn().mockImplementation(whereOptions => {
  const onlyPublic = whereOptions.where.isPublic

  return onlyPublic !== undefined
    ? [ARTICLE_MOCK].filter(({ isPublic }) => isPublic === onlyPublic)
    : [ARTICLE_MOCK]
})

const setupSequelizeMock = (
  findArticle: Function = findArticleMock,
  findAllArticles: Function = findAllArticlesMock
): typeof jest =>
  jest.doMock('sequelize', () => {
    const { dataTypes: DataTypes } = require('sequelize-test-helpers')

    class Sequelize {}

    class Model {
      public static init = jest.fn()
      public static update = jest.fn()
      public static belongsTo = jest.fn()
      public static findOne = findArticle
      public static afterCreate = jest.fn()
      public static afterUpdate = jest.fn()
      public static belongsToMany = jest.fn()
      public static findAll = findAllArticles
      public static bulkCreate = bulkCreateMock
      public static scope = scopeCallMock.mockImplementation(() => Model)
      public static create = jest.fn().mockImplementation(() => ARTICLE_MOCK)
    }

    return {
      Model,
      DataTypes,
      Sequelize
    }
  })

const setUp = () => {
  const ArticleService = require('../ArticleService').default

  return new ArticleService(_CategoryService)
}

describe('Article Service', () => {
  beforeEach(() => {
    jest.resetModules()
  })

  describe('create Method', () => {
    it('should return created articleId', async () => {
      setupSequelizeMock()

      const articleService = setUp()
      const result = await articleService.create(ARTICLE_MOCK, 1)

      expect(result).toEqual(ARTICLE_MOCK)
    })
  })

  describe('update Method', () => {
    it('should throw an error if article does not exist', async () => {
      setupSequelizeMock(jest.fn().mockImplementation(() => undefined))

      const articleService = setUp()

      try {
        await articleService.update(1, ARTICLE_MOCK, 1)
      } catch (e) {
        expect(e.message).toEqual('{"articleId":["No such article found."]}')
      }
    })

    it('should return updated articleId', async () => {
      setupSequelizeMock()

      const articleService = setUp()
      const result = await articleService.update(1, ARTICLE_MOCK, 1)

      expect(result).toEqual(ARTICLE_MOCK)
    })
  })

  describe('togglePublicFlag Method', () => {
    it('should throw an error if article does not exist', async () => {
      setupSequelizeMock(jest.fn().mockImplementation(() => undefined))

      const articleService = setUp()

      try {
        await articleService.update(1, ARTICLE_MOCK, 1)
      } catch (e) {
        expect(e.message).toEqual('{"articleId":["No such article found."]}')
      }
    })

    it('should return updated articleId', async () => {
      setupSequelizeMock()

      const articleService = setUp()
      const result = await articleService.togglePublicFlag(1, false)

      expect(result).toEqual(ARTICLE_MOCK)
    })
  })

  describe('findById Method', () => {
    it('should call scope method', async () => {
      setupSequelizeMock()

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
      setupSequelizeMock()

      const articleService = setUp()
      await articleService.findAll()

      expect(scopeCallMock).toHaveBeenCalledWith([
        'withImage',
        'withCategoryList'
      ])
    })

    it('should return all articles when onlyPublic flag was not provided', async () => {
      setupSequelizeMock()

      const articleService = setUp()
      const result = await articleService.findAll()

      expect(result).toEqual([ARTICLE_MOCK])
    })

    it('should return all public articles', async () => {
      setupSequelizeMock()

      const articleService = setUp()
      const result = await articleService.findAll(true)

      expect(result).toEqual([])
    })
  })

  describe('findAllByCategoryId Method', () => {
    beforeAll(() => {
      _CategoryService
        .findById(Arg.any())
        .mimicks(
          async categoryId =>
            CATEGORY_LIST_MOCK.find(
              category => category.categoryId === categoryId
            ) || null
        )

      setupSequelizeMock(
        findArticleMock,
        jest
          .fn()
          .mockImplementation(({ include }) =>
            [ARTICLE_MOCK].filter(article =>
              article.categoryList?.find(
                category => category.categoryId === include[0].where.categoryId
              )
            )
          )
      )
    })

    it('should throw an error if category does not exist', async () => {
      const articleService = setUp()

      try {
        await articleService.findAllByCategoryId(3)
      } catch (e) {
        expect(e.message).toEqual('{"categoryId":["No such article found."]}')
      }
    })

    it('should return found articles', async () => {
      const articleService = setUp()

      const result = await articleService.findAllByCategoryId(1)
      expect(result).toEqual([ARTICLE_MOCK])
    })

    it('should return empty array if there was not matched articles to provided categoryId', async () => {
      const articleService = setUp()

      const result = await articleService.findAllByCategoryId(2)
      expect(result).toEqual([])
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
  categoryList: [{ categoryId: 1 }],
  description: '123',
  createdAt: new Date('2019'),
  updatedAt: new Date('2019')
}

const CATEGORY_LIST_MOCK: CategoryType[] = [
  {
    categoryId: 1,
    name: 'Name 1'
  },
  {
    categoryId: 2,
    name: 'Name 2'
  }
]
