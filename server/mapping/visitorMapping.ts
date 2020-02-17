import { VisitorType, VisitorModel } from '@type/Visitor'

export default (record: VisitorModel): VisitorType => ({
  visitorId: record.visitorId,
  articleId: record.articleId,
  ipAddress: record.ipAddress,
  userAgent: record.userAgent,
  updatedAt: record.updatedAt,
  createdAt: record.createdAt
})
