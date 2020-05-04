import { Resolver, Query, Arg } from 'type-graphql'

import VisitorService from '@service/VisitorService'

import { VisitorType } from '@type/Visitor'

@Resolver()
export default class VisitorResolver {
  constructor(private visitorService: VisitorService = new VisitorService()) {}

  @Query(type => [VisitorType])
  async visitorList(
    @Arg('onlyArticles', type => Boolean) onlyArticles: boolean
  ): Promise<VisitorType[]> {
    return this.visitorService.findAll(onlyArticles)
  }
}
