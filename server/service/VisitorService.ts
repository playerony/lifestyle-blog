import { Op, WhereOptions } from 'sequelize'

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
        userAgent: userAgent!,
        ipAddress: ipAddress!
      }
    })

    if (foundVisitor) {
      return null
    }

    const createdVisitor = await Visitor.create<VisitorModel>({
      articleId,
      userAgent,
      ipAddress
    })

    return visitorMapping(createdVisitor)
  }

  async findAll(onlyArticles?: boolean): Promise<VisitorType[]> {
    const whereOptions: WhereOptions = {}
    if (onlyArticles !== undefined) {
      whereOptions.articleId = {
        [Op.not]: null
      }
    }

    const visitorList = await Visitor.findAll<VisitorModel>({
      where: whereOptions
    })

    return visitorList.map(visitorMapping)
  }
}
