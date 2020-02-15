import { Visitor } from '@model/Visitor'

import { VisitorModel } from '@type/Visitor'

export default class VisitorService {
  async create(
    articleId: number | null,
    ipAddress: string
  ): Promise<VisitorModel | null> {
    const foundVisitor = await Visitor.findOne<VisitorModel>({
      where: {
        articleId,
        ipAddress
      }
    })

    if (Boolean(foundVisitor)) {
      return null
    }

    return Visitor.create<VisitorModel>({ articleId, ipAddress })
  }

  async findAll(): Promise<VisitorModel[]> {
    return Visitor.findAll<VisitorModel>()
  }
}
