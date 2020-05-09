import Substitute from '@fluffy-spoon/substitute'

import CategoryResolver from '../CategoryResolver'

import CategoryService from '@service/CategoryService'

import { CategoryType } from '@type/Category'

const _CategoryService = Substitute.for<CategoryService>()

let resolver: CategoryResolver

describe('Category Resolver', () => {
  beforeEach(() => {
    resolver = new CategoryResolver(_CategoryService)
  })

  beforeAll(() => {
    _CategoryService.findAll().mimicks(async () => CATEGORY_LIST_MOCK)
  })

  describe('categoryList Query', () => {
    it('should return proper data', async () => {
      const result = await resolver.categoryList()

      expect(result).toEqual(CATEGORY_LIST_MOCK)
    })
  })
})

const CATEGORY_LIST_MOCK: CategoryType[] = [
  {
    name: 'name',
    categoryId: 1
  }
]
