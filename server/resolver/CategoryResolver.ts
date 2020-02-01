import { Resolver, Query } from 'type-graphql'

import CategoryService from '@service/CategoryService'

import { CategoryRecordResult } from '@type/Category'

@Resolver()
export default class CategoryResolver {
  constructor(private categoryService: CategoryService = new CategoryService()) { }
  
  @Query(type => [CategoryRecordResult])
  async getCategoryList(): Promise<CategoryRecordResult[]> {
    return await this.categoryService.findAll()
  }
}
