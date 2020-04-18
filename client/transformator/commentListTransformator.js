const sortComments = comments =>
  comments.sort(
    (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
  )

const getNestedComments = (comments, commentId) => {
  const commentReplies = comments.filter(
    comment => comment.parentCommentId === commentId
  )

  if (!commentReplies.length) {
    return []
  }

  return commentReplies.map(comment => {
    const hasReply = comments.some(
      replyComment => replyComment.parentCommentId === comment.commentId
    )

    return {
      ...comment,
      comments: hasReply ? getNestedComments(comments, comment.commentId) : []
    }
  })
}

export default (comments, replyErrorData) => {
  const parsedComments = comments.map(comment => {
    if (replyErrorData?.commentId) {
      return {
        ...comment,
        replyErrorData
      }
    }

    return comment
  })

  const parentComments = sortComments(
    parsedComments.filter(comment => !comment.parentCommentId)
  )

  const otherComments = sortComments(
    parsedComments.filter(comment => Boolean(comment.parentCommentId))
  )

  return sortComments(parentComments).map(parentComment => ({
    ...parentComment,
    comments: getNestedComments(otherComments, parentComment.commentId)
  }))
}
