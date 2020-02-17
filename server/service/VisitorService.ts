import { Visitor } from '@model/Visitor'

import Context from '@type/Context'
import { VisitorModel, VisitorType } from '@type/Visitor'

import visitorMapping from '@mapping/visitorMapping'

export default class VisitorService {
  async create(
    articleId: number | null,
    { userAgent, ipAddress }: Context
  ): Promise<VisitorType | null> {
    const foundVisitor = await Visitor.findOne<VisitorModel>({
      where: {
        articleId,
        userAgent,
        ipAddress
      }
    })

    if (Boolean(foundVisitor)) {
      return null
    }

    const createdVisitor = await Visitor.create<VisitorModel>({
      articleId,
      userAgent,
      ipAddress
    })

    return visitorMapping(createdVisitor)
  }

  async findAll(): Promise<VisitorType[]> {
    const visitorList = await Visitor.findAll<VisitorModel>()

    return visitorList.map(visitorMapping) as VisitorType[]
  }
}
