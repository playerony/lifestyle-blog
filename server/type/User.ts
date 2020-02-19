import { Model } from 'sequelize'
import { Field, ObjectType } from 'type-graphql'

export class UserModel extends Model {
  userId?: number
  login?: string
  password?: string
  createdAt?: Date
  updatedAt?: Date
}

@ObjectType()
export class UserType {
  @Field()
  userId?: number

  @Field()
  login?: string

  @Field()
  password?: string

  @Field()
  createdAt?: Date

  @Field()
  updatedAt?: Date
}

@ObjectType()
export class UserAddResult {
  @Field()
  token!: string

  @Field()
  user!: UserType
}
