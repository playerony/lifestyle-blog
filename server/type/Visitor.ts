import { Model } from 'sequelize'
import { Field, ObjectType } from 'type-graphql'

export class VisitorModel extends Model {
  visitorId?: number
  articleId?: number
  ipAddress?: string
  userAgent?: string
  createdAt?: Date
  updatedAt?: Date
}

@ObjectType()
export class VisitorType {
  @Field()
  visitorId?: number

  @Field()
  articleId?: number

  @Field()
  ipAddress?: string

  @Field()
  userAgent?: string

  @Field()
  createdAt?: Date

  @Field()
  updatedAt?: Date
}
