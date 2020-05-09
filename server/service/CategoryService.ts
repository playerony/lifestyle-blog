import { Category } from '@model/Category'

import { CategoryModel, CategoryType } from '@type/Category'

import categoryMapping from '@mapping/categoryMapping'

export default class CategoryService {
  async findAll(): Promise<CategoryType[]> {
    const categoryList = await Category.findAll<CategoryModel>()

    return categoryList.map(categoryMapping)
  }

  async findById(categoryId: number): Promise<CategoryType | null> {
    const foundCategory = await Category.findOne<CategoryModel>({
      where: {
        categoryId
      }
    })

    return foundCategory ? categoryMapping(foundCategory) : null
  }
}
