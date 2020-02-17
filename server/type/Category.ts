import { Model } from 'sequelize'
import { Field, ObjectType } from 'type-graphql'

@ObjectType()
export class CategoryModel extends Model {
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
