import { CategoryType } from '@type/Category'

jest.doMock('sequelize', () => {
  const { dataTypes: DataTypes } = require('sequelize-test-helpers')

  class Sequelize {}

  class Model {
    public static init = jest.fn()
    public static findAll = jest
      .fn()
      .mockImplementation(() => CATEGORY_LIST_MOCK)
    public static findOne = jest.fn().mockImplementation(({ where }) => {
      return CATEGORY_LIST_MOCK.find(
        category => category.categoryId === where.categoryId
      )
    })
  }

  return {
    Model,
    DataTypes,
    Sequelize
  }
})

const setUp = () => {
  const CategoryService = require('../CategoryService').default

  return new CategoryService()
}

describe('Category Service', () => {
  describe('findAll Method', () => {
    it('should return category list', async () => {
      const categoryService = setUp()

      const result = await categoryService.findAll()

      expect(result).toEqual(CATEGORY_LIST_MOCK)
    })
  })

  describe('findById Method', () => {
    it('should return found category', async () => {
      const categoryService = setUp()

      const result = await categoryService.findById(1)

      expect(result).toEqual({
        categoryId: 1,
        name: 'Name 1',
        createdAt: undefined,
        updatedAt: undefined
      })
    })

    it('should return null when category does not exist', async () => {
      const categoryService = setUp()

      const result = await categoryService.findById(3)

      expect(result).toBeNull()
    })
  })
})

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
