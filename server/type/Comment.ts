import { Model } from 'sequelize'
import { Field, ObjectType, InputType, Int } from 'type-graphql'

export class CommentModel extends Model {
  commentId?: number
  parentCommentId?: number | null
  articleId?: number
  content?: string
  creator?: string
  likes?: number
  createdAt?: Date
  updatedAt?: Date
}

@ObjectType()
export class CommentType {
  @Field()
  commentId?: number

  @Field(type => Int, { nullable: true })
  parentCommentId?: number | null

  @Field()
  articleId?: number

  @Field()
  content?: string

  @Field()
  creator?: string

  @Field()
  likes?: number

  @Field()
  createdAt?: Date

  @Field()
  updatedAt?: Date
}

@InputType()
export class CommentSaveRequest {
  @Field(type => Int, { nullable: true })
  parentCommentId?: number | null

  @Field()
  articleId?: number

  @Field()
  content?: string

  @Field()
  creator?: string
}
