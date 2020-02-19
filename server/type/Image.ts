import { Model } from 'sequelize'
import { Field, ObjectType } from 'type-graphql'

export class ImageModel extends Model {
  imageId?: number
  userId?: number
  photoUrl?: string
  createdAt?: Date
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
