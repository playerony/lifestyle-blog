import { Model } from 'sequelize'
import { Int, Field, ObjectType, InputType } from 'type-graphql'

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
