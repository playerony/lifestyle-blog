import { CommentType, CommentModel } from '@type/Comment'

export default (record: CommentModel): CommentType => ({
  likes: record.likes,
  content: record.content,
  creator: record.creator,
  commentId: record.commentId,
  articleId: record.articleId,
  createdAt: record.createdAt,
  updatedAt: record.updatedAt,
  parentCommentId: record.parentCommentId
})
