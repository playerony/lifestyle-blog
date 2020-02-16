import { Visitor } from '@model/Visitor'

import Context from '@type/Context'
import { VisitorModel, VisitorRecord } from '@type/Visitor'

export default class VisitorService {
  async create(
    articleId: number | null,
    { userAgent, ipAddress }: Context
  ): Promise<VisitorRecord | null> {
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

    return Visitor.create<VisitorModel>({ articleId, userAgent, ipAddress })
  }

  async findAll(): Promise<VisitorRecord[]> {
    return Visitor.findAll<VisitorModel>()
  }
}
