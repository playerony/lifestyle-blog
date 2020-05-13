import gql from 'graphql-tag'

import { CREATE_COMMENT_MUTATION } from '../createComment'

describe('createComment Mutation', () => {
  it('should import', () => {
    expect(typeof CREATE_COMMENT_MUTATION).toBeDefined()
  })

  it('should contain proper fields', () => {
    expect(CREATE_COMMENT_MUTATION).toEqual(MUTATION_FORMULA)
  })
})

const MUTATION_FORMULA = gql`
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
