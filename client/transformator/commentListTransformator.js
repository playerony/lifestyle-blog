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
  const parentComments = comments.filter(comment => !comment.parentCommentId)
  const otherComments = comments.filter(comment =>
    Boolean(comment.parentCommentId)
  )

  return parentComments.map(parentComment => ({
    ...parentComment,
    comments: getNestedComments(otherComments, parentComment.commentId)
  }))
}
