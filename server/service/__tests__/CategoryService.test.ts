import { CategoryType } from '@type/Category'

jest.doMock('sequelize', () => {
  const { dataTypes: DataTypes } = require('sequelize-test-helpers')

  class Sequelize {}

  class Model {
    public static init = jest.fn()
    public static findAll = jest
      .fn()
      .mockImplementation(() => CATEGORY_LIST_MOCK)
  }

  return {
    Model,
    DataTypes,
    Sequelize
  }
})

describe('CategoryService Service', () => {
  describe('findAll Method', () => {
    it('should return category list', async () => {
      const CategoryService = require('../CategoryService').default
      const categoryService = new CategoryService()

      const result = await categoryService.findAll()

      expect(result).toEqual(CATEGORY_LIST_MOCK)
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
