import { literal } from 'sequelize'

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
        commentId: ['Nie znaleziono takiego komentarza.']
      })
    }

    await Comment.update<CommentModel>(
      {
        ...comment
      },
      { where: { commentId } }
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

  async incrementCommentLikes(commentId: number): Promise<number> {
    const foundComment = await this.findById(commentId)
    if (!foundComment) {
      throw new ValidationError({
        commentId: ['Nie znaleziono takiego komentarza.']
      })
    }

    await Comment.update<CommentModel>(
      { likes: literal('likes +1') },
      { where: { commentId } }
    )

    return foundComment.likes! + 1
  }

  async decrementCommentLikes(commentId: number): Promise<number> {
    const foundComment = await this.findById(commentId)
    if (!foundComment) {
      throw new ValidationError({
        commentId: ['Nie znaleziono takiego komentarza.']
      })
    }

    await Comment.update<CommentModel>(
      { likes: literal('likes -1') },
      { where: { commentId } }
    )

    return foundComment.likes! - 1
  }
}
