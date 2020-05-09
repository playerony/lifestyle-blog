import { Resolver, Query, Arg, Int } from 'type-graphql'

import VisitorService from '@service/VisitorService'

import { VisitorType } from '@type/Visitor'

import { visitorListByCategoryIdValidation } from './VisitorResolver.validator'

@Resolver()
export default class VisitorResolver {
  constructor(private visitorService: VisitorService = new VisitorService()) {}

  @Query(type => [VisitorType])
  async visitorList(
    @Arg('onlyArticles', type => Boolean) onlyArticles?: boolean
  ): Promise<VisitorType[]> {
    return this.visitorService.findAll(onlyArticles)
  }

  @Query(type => [VisitorType])
  async visitorListByCategoryId(
    @Arg('categoryId', type => Int) categoryId: number
  ): Promise<VisitorType[]> {
    visitorListByCategoryIdValidation(categoryId)

    return this.visitorService.findAllByCategoryId(categoryId)
  }
}
