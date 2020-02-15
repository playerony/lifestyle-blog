import { Visitor } from '@model/Visitor'

import Context from '@type/Context'
import { VisitorModel } from '@type/Visitor'

export default class VisitorService {
  async create(
    articleId: number | null,
    { userAgent, ipAddress }: Context
  ): Promise<VisitorModel | null> {
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

  async findAll(): Promise<VisitorModel[]> {
    return Visitor.findAll<VisitorModel>()
  }
}
