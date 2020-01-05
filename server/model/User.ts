import { Field, ObjectType } from 'type-graphql'
import { STRING, INTEGER, Model } from 'sequelize'

import { sequelize } from '@config/sequelize'

export class UserAddModel {
  login!: string
  password!: string
}

@ObjectType()
export class UserModel {
  @Field()
  userId!: number

  @Field()
  login!: string

  @Field()
  password!: string

  @Field()
  createdAt!: Date

  @Field()
  updatedAt!: Date
}

@ObjectType()
export class UserAddResult {
  @Field()
  token!: string

  @Field()
  user!: UserModel
}

export class User extends Model {}

User.init(
  {
    userId: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    login: STRING(50),
    password: STRING(100)
  },
  { sequelize }
)
