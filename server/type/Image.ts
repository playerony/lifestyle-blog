import { Field, ObjectType } from 'type-graphql'

@ObjectType()
export class ImageModel {
  @Field()
  imageId!: number

  @Field()
  userId!: number

  @Field()
  filename!: string

  @Field()
  createdAt!: Date

  @Field()
  updatedAt!: Date
}

@ObjectType()
export class ImageUploadResult {
  @Field()
  imageId!: number

  @Field()
  filename!: string
}
