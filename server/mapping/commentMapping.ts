import { CommentType, CommentModel } from '@type/Comment'

const commentMapping = (record: CommentModel): CommentType => ({
  commentId: record.commentId,
  articleId: record.articleId,
  content: record.content,
  creator: record.creator,
  parentCommentId: record.parentCommentId,
  parentComment: record.parentCommentId
    ? commentMapping(record.parentComment!)
    : null,
  createdAt: new Date('2020'),
  updatedAt: new Date('2020')
})
