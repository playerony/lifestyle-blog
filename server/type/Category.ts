import { Model } from 'sequelize'
import { Field, ObjectType } from 'type-graphql'

export class CategoryModel extends Model {
  categoryId?: number
  name?: string
  description?: string
  createdAt?: Date
  updatedAt?: Date
}

@ObjectType()
export class CategoryType {
  @Field()
  categoryId?: number

  @Field()
  name?: string

  @Field()
  description?: string

  @Field()
  createdAt?: Date

  @Field()
  updatedAt?: Date
}
