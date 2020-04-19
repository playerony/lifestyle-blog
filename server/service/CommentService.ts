import { Comment } from '@model/Comment'

import { CommentType, CommentModel, CommentSaveRequest } from '@type/Comment'

import commentMapping from '@mapping/commentMapping'

import ValidationError from '@utility/ValidationError'

export default class CommentService {
  async create(comment: CommentSaveRequest): Promise<CommentType> {
    const createdComment = await Comment.create<CommentModel>({
      ...comment
    })

    return commentMapping(createdComment)
  }

  async update(
    commentId: number,
    comment: CommentSaveRequest
  ): Promise<CommentType | null> {
    const foundComment = await this.findById(commentId)
    if (!foundComment) {
      throw new ValidationError({
        commentId: ['No such comment found.']
      })
    }

    await Comment.update<CommentModel>(
      {
        ...comment
      },
      { where: { commentId }, individualHooks: true }
    )

    return this.findById(commentId)
  }

  async findAllByArticleId(articleId: number): Promise<CommentType[]> {
    const commentList = await Comment.findAll<CommentModel>({
      where: { articleId }
    })

    return commentList.map(commentMapping)
  }

  async findAll(): Promise<CommentType[]> {
    const commentList = await Comment.findAll<CommentModel>()

    return commentList.map(commentMapping)
  }

  async findById(commentId: number): Promise<CommentType | null> {
    const foundComment = await Comment.findOne<CommentModel>({
      where: {
        commentId
      }
    })

    return foundComment ? commentMapping(foundComment) : null
  }
}
