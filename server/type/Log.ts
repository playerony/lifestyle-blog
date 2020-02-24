import { Model } from 'sequelize'
import { Field, ObjectType } from 'type-graphql'

export class LogModel extends Model {
  logId?: number
  level?: string
  message?: string
  createdAt?: Date
  updatedAt?: Date
}

@ObjectType()
export class LogType {
  @Field()
  logId?: number

  @Field()
  level?: string

  @Field()
  message?: string

  @Field()
  createdAt?: Date

  @Field()
  updatedAt?: Date
}
