import { Resolver, Query, Mutation, Arg, Int } from 'type-graphql'

import CommentService from '@service/CommentService'

import { CommentType, CommentSaveRequest } from '@type/Comment'

import {
  createCommentValidation,
  updateCommentValidation,
  incrementCommentLikesValidation,
  decrementCommentLikesValidation,
  commentListByArticleIdValidation
} from './CommentResolver.validator'

@Resolver()
export default class CommentResolver {
  constructor(private commentService: CommentService = new CommentService()) {}

  @Query(type => [CommentType])
  async commentListByArticleId(
    @Arg('articleId', type => Int) articleId: number
  ): Promise<CommentType[]> {
    commentListByArticleIdValidation(articleId)

    return this.commentService.findAllByArticleId(articleId)
  }

  @Query(type => [CommentType])
  async commentList(): Promise<CommentType[]> {
    return this.commentService.findAll()
  }

  @Mutation(type => CommentType)
  async createComment(
    @Arg('comment', type => CommentSaveRequest) comment: CommentSaveRequest
  ): Promise<CommentType> {
    createCommentValidation(comment)

    return this.commentService.create(comment)
  }

  @Mutation(type => CommentType)
  async updateComment(
    @Arg('commentId', type => Int) commentId: number,
    @Arg('comment', type => CommentSaveRequest) comment: CommentSaveRequest
  ): Promise<CommentType | null> {
    updateCommentValidation(commentId, comment)

    return this.commentService.update(commentId, comment)
  }

  @Mutation(type => Int)
  async incrementCommentLikes(
    @Arg('commentId', type => Int) commentId: number
  ): Promise<number> {
    incrementCommentLikesValidation(commentId)

    return this.commentService.incrementCommentLikes(commentId)
  }

  @Mutation(type => Int)
  async decrementCommentLikes(
    @Arg('commentId', type => Int) commentId: number
  ): Promise<number> {
    decrementCommentLikesValidation(commentId)

    return this.commentService.decrementCommentLikes(commentId)
  }
}
