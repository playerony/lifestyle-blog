import gql from 'graphql-tag'

export const INCREMENT_COMMENT_LIKES_MUTATION = gql`
  mutation IncrementCommentLikes($commentId: Int) {
    incrementCommentLikes(commentId: $commentId)
  }
`
