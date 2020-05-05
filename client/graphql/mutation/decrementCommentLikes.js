import gql from 'graphql-tag'

export const DECREMENT_COMMENT_LIKES_MUTATION = gql`
  mutation DecrementCommentLikes($commentId: Int) {
    decrementCommentLikes(commentId: $commentId)
  }
`
