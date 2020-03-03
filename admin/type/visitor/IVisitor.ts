export default interface IVisitor {
  articleId?: number | null
  visitorId?: number
  ipAddress?: string
  userAgent?: string
  createdAt?: Date
  updatedAt?: Date
}
