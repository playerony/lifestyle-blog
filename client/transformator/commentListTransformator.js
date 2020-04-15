const getNestedComments = (comments, parentCommentId) => {
  let result = []

  for (const i in comments) {
    if (comments[i].parentCommentId === parentCommentId) {
      const parentComments = getNestedComments(comments, comments[i].commentId)

      if (parentComments.length) comments[i].parentComments = parentComments

      result.push(comments[i])
    }
  }

  return result
}

const getMainComments = comments =>
  comments.filter(comment => !comment.parentCommentId)

const getOtherComments = comments =>
  comments.filter(comment => Boolean(comment.parentCommentId))

export default comments => {
  const mainComments = getMainComments(comments)
  const nestedComments = getOtherComments(comments)

  mainComments.map(mainComment => {
    mainComment.parentComments = getNestedComments(
      nestedComments,
      mainComment.commentId
    )

    return mainComment
  })

  return mainComments
}
