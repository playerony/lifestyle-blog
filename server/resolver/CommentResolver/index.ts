import { Resolver, Query, Mutation, Arg, Int } from 'type-graphql'

import CommentService from '@service/CommentService'

import { CommentType, CommentSaveRequest } from '@type/Comment'

@Resolver()
export default class CommentResolver {
  constructor(private commentService: CommentService = new CommentService()) {}

  @Query(type => [CommentType])
  async commentListByArticleId(
    @Arg('articleId', type => Int) articleId: number
  ): Promise<CommentType[]> {
    return this.commentService.findAllByArticleId(articleId)
  }

  @Mutation(type => CommentType)
  async createComment(
    @Arg('comment', type => CommentSaveRequest) comment: CommentSaveRequest
  ): Promise<CommentType> {
    return this.commentService.create(comment)
  }

  @Mutation(type => CommentType)
  async updateComment(
    @Arg('commentId', type => Int) commentId: number,
    @Arg('comment', type => CommentSaveRequest) comment: CommentSaveRequest
  ): Promise<CommentType | null> {
    return this.commentService.update(commentId, comment)
  }
}
