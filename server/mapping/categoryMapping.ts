import { CategoryType, CategoryModel } from '@type/Category'

export default (record: CategoryModel): CategoryType => ({
  name: record.name,
  updatedAt: record.updatedAt,
  createdAt: record.createdAt,
  categoryId: record.categoryId,
  description: record.description
})
