import { Model } from 'sequelize'
import { Field, ObjectType, Int } from 'type-graphql'

export class VisitorModel extends Model {
  visitorId?: number
  articleId?: number | null
  ipAddress?: string
  userAgent?: string
  createdAt?: Date
  updatedAt?: Date
}

@ObjectType()
export class VisitorType {
  @Field()
  visitorId?: number

  @Field(type => [Int])
  articleId?: number | null

  @Field()
  ipAddress?: string

  @Field()
  userAgent?: string

  @Field()
  createdAt?: Date

  @Field()
  updatedAt?: Date
}
