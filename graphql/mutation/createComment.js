import gql from 'graphql-tag'

export const CREATE_COMMENT_MUTATION = gql`
  mutation CreateComment($comment: CommentSaveRequest) {
    createComment(comment: $comment) {
      content
      creator
      createdAt
      commentId
      parentCommentId
    }
  }
`
