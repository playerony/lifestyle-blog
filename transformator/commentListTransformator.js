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

export default comments => {
  const parentComments = sortComments(
    comments.filter(comment => !comment.parentCommentId)
  )

  const otherComments = sortComments(
    comments.filter(comment => Boolean(comment.parentCommentId))
  )

  return sortComments(parentComments).map(parentComment => ({
    ...parentComment,
    comments: getNestedComments(otherComments, parentComment.commentId)
  }))
}
