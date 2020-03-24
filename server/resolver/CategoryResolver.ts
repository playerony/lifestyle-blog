import { Resolver, Query } from 'type-graphql'

import CategoryService from '@service/CategoryService'

import { CategoryType } from '@type/Category'

@Resolver()
export default class CategoryResolver {
  constructor(
    private categoryService: CategoryService = new CategoryService()
  ) {}

  @Query(type => [CategoryType])
  async categoryList(): Promise<CategoryType[]> {
    return this.categoryService.findAll()
  }
}
