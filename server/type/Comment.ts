import { Model } from 'sequelize'
import { Field, ObjectType } from 'type-graphql'

import { ArticleModel } from './Article'

export class CommentModel extends Model {
  commentId?: number
  parentCommentId?: number
  parentComment?: CommentModel
  articleId?: number
  article?: ArticleModel
  content?: string
  creator?: string
  createdAt?: Date
  updatedAt?: Date
}

@ObjectType()
export class CommentType {
  @Field()
  commentId?: number

  @Field()
  parentCommentId?: number

  @Field(type => CommentModel)
  parentComment?: CommentModel | null

  @Field()
  articleId?: number

  @Field(type => ArticleModel)
  article?: ArticleModel | null

  @Field()
  content?: string

  @Field()
  creator?: string

  @Field()
  createdAt?: Date

  @Field()
  updatedAt?: Date
}
