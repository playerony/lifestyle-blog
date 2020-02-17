import { VisitorType, VisitorModel } from '@type/Visitor'

export default (record?: VisitorModel): VisitorType | null => {
  if (!record) {
    return null
  }

  return {
    visitorId: record.visitorId,
    articleId: record.articleId,
    ipAddress: record.ipAddress,
    userAgent: record.userAgent,
    updatedAt: record.updatedAt,
    createdAt: record.createdAt
  }
}
