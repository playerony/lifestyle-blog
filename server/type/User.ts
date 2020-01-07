import { Field, ObjectType } from 'type-graphql'

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
