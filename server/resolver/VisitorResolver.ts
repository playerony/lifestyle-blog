import { Resolver, Query } from 'type-graphql'

import VisitorService from '@service/VisitorService'

import { VisitorType } from '@type/Visitor'

@Resolver()
export default class VisitorResolver {
  constructor(private visitorService: VisitorService = new VisitorService()) {}

  @Query(type => [VisitorType])
  async visitorList(): Promise<VisitorType[]> {
    return this.visitorService.findAll()
  }
}
