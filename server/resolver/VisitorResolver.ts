import { Resolver, Query } from 'type-graphql'

import VisitorService from '@service/VisitorService'

import { VisitorModel } from '@type/Visitor'

@Resolver()
export default class VisitorResolver {
  constructor(private visitorService: VisitorService = new VisitorService()) { }
  
  @Query(type => [VisitorModel])
  async visitorList(): Promise<VisitorModel[]> {
    return await this.visitorService.findAll()
  }
}
