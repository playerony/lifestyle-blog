import { Model } from 'sequelize'
import { Field, ObjectType } from 'type-graphql'

export class CommentModel extends Model {
  commentId?: number
  parentCommentId?: number
  parentComment?: CommentModel | null
  articleId?: number
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

  @Field(type => CommentType)
  parentComment?: CommentType | null

  @Field()
  articleId?: number

  @Field()
  content?: string

  @Field()
  creator?: string

  @Field()
  createdAt?: Date

  @Field()
  updatedAt?: Date
}
