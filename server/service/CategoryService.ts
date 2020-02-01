import { Category } from '@model/Category'

import { CategoryModel, CategoryRecordResult } from '@type/Category'

export default class CategoryService {
  async findAll(): Promise<CategoryRecordResult[]> {
    const categoryList = await Category.findAll<CategoryModel>()

    return categoryList.map(({ categoryId, name }) => ({ categoryId: categoryId!, name: name! }))
  }
}
