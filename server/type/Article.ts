import { Model } from 'sequelize'
import { Int, Field, ObjectType, InputType } from 'type-graphql'

import { ImageModel, ImageType } from './Image'
import { CategoryModel, CategoryType } from './Category'

@ObjectType()
export class ArticleModel extends Model {
  @Field()
  articleId?: number

  @Field()
  userId?: number

  @Field()
  imageId?: number

  @Field()
  title?: string

  @Field()
  description?: string

  @Field()
  content?: string

  @Field(type => ImageModel)
  image?: ImageModel

  @Field(type => [CategoryModel])
  categoryList?: CategoryModel[]

  @Field()
  createdAt?: Date

  @Field()
  updatedAt?: Date
}

@ObjectType()
export class ArticleType {
  @Field()
  articleId?: number

  @Field()
  userId?: number

  @Field()
  imageId?: number

  @Field()
  title?: string

  @Field()
  description?: string

  @Field()
  content?: string

  @Field(type => ImageType)
  image?: ImageType | null

  @Field(type => [CategoryType])
  categoryList?: CategoryType[] | null

  @Field()
  createdAt?: Date

  @Field()
  updatedAt?: Date
}

@InputType()
export class ArticleCreateRequest {
  @Field()
  imageId?: number

  @Field()
  title?: string

  @Field()
  description?: string

  @Field()
  content?: string

  @Field(type => [Int])
  categoryIdList?: number[]
}

@ObjectType()
export class ArticleCreateResult {
  @Field()
  articleId!: number
}
