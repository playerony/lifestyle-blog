import Substitute from '@fluffy-spoon/substitute'

import CategoryResolver from '../CategoryResolver'

import CategoryService from '@service/CategoryService'

import { CategoryRecordResult } from '@type/Category'

const _CategoryService = Substitute.for<CategoryService>()

let resolver: CategoryResolver

describe('CategoryResolver Resolver', () => {
  beforeEach(() => {
    resolver = new CategoryResolver(_CategoryService)
  })

  beforeAll(() => {
    _CategoryService.findAll().mimicks(async () => CATEGORY_LIST_MOCK)
  })

  it('should return proper data', async () => {
    const result = await resolver.categoryList()

    expect(result).toEqual(CATEGORY_LIST_MOCK)
  })
})

const CATEGORY_LIST_MOCK: CategoryRecordResult[] = [
  {
    categoryId: 1,
    name: 'Test name 1',
    description: 'Test description 2'
  }
]
