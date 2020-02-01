import { Category } from '@model/Category'

import { CategoryModel, CategoryRecordResult } from '@type/Category'

const categoryMapping = (category: CategoryModel): CategoryRecordResult => ({
  name: category.name!,
  categoryId: category.categoryId!,
  description: category.description!
})

export default class CategoryService {
  async findAll(): Promise<CategoryRecordResult[]> {
    const categoryList = await Category.findAll<CategoryModel>()

    return categoryList.map(categoryMapping)
  }
}
