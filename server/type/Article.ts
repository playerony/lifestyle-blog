import { Model } from 'sequelize'
import { Int, Field, ObjectType, InputType } from 'type-graphql'

import { ImageModel, ImageType } from './Image'
import { CategoryModel, CategoryType } from './Category'

export class ArticleModel extends Model {
  articleId?: number
  userId?: number
  imageId?: number
  title?: string
  description?: string
  content?: string
  image?: ImageModel
  isPublic?: boolean
  categoryList?: CategoryModel[] | null
  createdAt?: Date
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
  isPublic?: boolean

  @Field()
  createdAt?: Date

  @Field()
  updatedAt?: Date
}

@InputType()
export class ArticleSaveRequest {
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
