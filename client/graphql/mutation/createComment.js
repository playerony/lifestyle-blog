import gql from 'graphql-tag'

export const CREATE_COMMENT_MUTATION = gql`
  mutation CreateComment($comment: CommentSaveRequest) {
    createComment(comment: $comment) {
      commentId
      parentCommentId
      content
      creator
      createdAt
    }
  }
`
