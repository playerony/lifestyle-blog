import { CommentType, CommentModel } from '@type/Comment'

const commentMapping = (record: CommentModel): CommentType => ({
  commentId: record.commentId,
  articleId: record.articleId,
  content: record.content,
  creator: record.creator,
  parentCommentId: record.parentCommentId,
  parentComment: record.parentComment
    ? commentMapping(record.parentComment!)
    : null,
  createdAt: record.createdAt,
  updatedAt: record.updatedAt
})

export default commentMapping
