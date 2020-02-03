import { Model } from 'sequelize'
import { Field, ObjectType } from 'type-graphql'

@ObjectType()
export class ImageModel extends Model {
  @Field()
  imageId?: number

  @Field()
  userId?: number

  @Field()
  filename?: string

  @Field()
  createdAt?: Date

  @Field()
  updatedAt?: Date
}

@ObjectType()
export class ImageAddResult {
  @Field()
  imageId!: number

  @Field()
  filename!: string
}