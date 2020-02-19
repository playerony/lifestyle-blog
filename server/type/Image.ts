import { Model } from 'sequelize'
import { Field, ObjectType } from 'type-graphql'

@ObjectType()
export class ImageModel extends Model {
  @Field()
  imageId?: number

  @Field()
  userId?: number

  @Field()
  photoUrl?: string

  @Field()
  createdAt?: Date

  @Field()
  updatedAt?: Date
}

@ObjectType()
export class ImageType {
  @Field()
  imageId?: number

  @Field()
  userId?: number

  @Field()
  photoUrl?: string

  @Field()
  createdAt?: Date

  @Field()
  updatedAt?: Date
}
