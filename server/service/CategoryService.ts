import { Category } from '@model/Category'

import { CategoryModel, CategoryRecordResult } from '@type/Category'

const categoryMapping = (category: CategoryModel): CategoryRecordResult => ({
  categoryId: category.categoryId!,
  name: category.name!
})

export default class CategoryService {
  async findAll(): Promise<CategoryRecordResult[]> {
    const categoryList = await Category.findAll<CategoryModel>()

    return categoryList.map(categoryMapping)
  }
}
