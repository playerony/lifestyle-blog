import { Resolver, Query } from 'type-graphql'

import VisitorService from '@service/VisitorService'

import { VisitorRecord } from '@type/Visitor'

@Resolver()
export default class VisitorResolver {
  constructor(private visitorService: VisitorService = new VisitorService()) { }
  
  @Query(type => [VisitorRecord])
  async visitorList(): Promise<VisitorRecord[]> {
    return await this.visitorService.findAll()
  }
}
