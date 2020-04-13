import * as categoryTypeList from '../Category'
import { CategoryType, CategoryModel } from '../Category'

describe('Category Types', () => {
  it('should contain two objects', () => {
    expect(Object.keys(categoryTypeList)).toHaveLength(2)
  })

  describe('CategoryType Type', () => {
    it('should contain proper fields', () => {
      const data: Required<CategoryType> = {
        name: 'name',
        categoryId: 1,
        createdAt: new Date('2020'),
        updatedAt: new Date('2020')
      }

      expect(Object.keys(data)).toEqual([
        'name',
        'categoryId',
        'createdAt',
        'updatedAt'
      ])
    })
  })

  describe('CategoryModel Type', () => {
    it('should contain proper fields', () => {
      const data: Partial<CategoryModel> = {
        name: 'name',
        categoryId: 1,
        createdAt: new Date('2020'),
        updatedAt: new Date('2020')
      }

      expect(Object.keys(data)).toEqual([
        'name',
        'categoryId',
        'createdAt',
        'updatedAt'
      ])
    })
  })
})
