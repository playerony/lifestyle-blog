import { Model } from 'sequelize'
import { Field, ObjectType } from 'type-graphql'

@ObjectType()
export class VisitorModel extends Model {
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

@ObjectType()
export class VisitorRecord {
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
