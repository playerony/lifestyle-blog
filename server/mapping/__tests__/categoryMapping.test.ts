import categoryMapping from '../categoryMapping'

import { CategoryType, CategoryModel } from '@type/Category'

describe('categoryMapping Mapping', () => {
  it('import categoryMapping', () => {
    expect(typeof categoryMapping).toEqual('function')
  })

  it('should return proper object', () => {
    expect(categoryMapping(INPUT_MOCK as any)).toEqual(OUTPUT_MOCK)
  })
})

const INPUT_MOCK: Partial<CategoryModel> = {
  name: 'Name',
  categoryId: 1
}

const OUTPUT_MOCK: CategoryType = {
  name: 'Name',
  categoryId: 1,
  updatedAt: undefined,
  createdAt: undefined
}
