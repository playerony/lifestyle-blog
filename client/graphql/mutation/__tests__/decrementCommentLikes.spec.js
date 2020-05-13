import gql from 'graphql-tag'

import { DECREMENT_COMMENT_LIKES_MUTATION } from '../decrementCommentLikes'

describe('decrementCommentLikes Mutation', () => {
  it('should import', () => {
    expect(typeof DECREMENT_COMMENT_LIKES_MUTATION).toBeDefined()
  })

  it('should contain proper fields', () => {
    expect(DECREMENT_COMMENT_LIKES_MUTATION).toEqual(MUTATION_FORMULA)
  })
})

const MUTATION_FORMULA = gql`
  mutation DecrementCommentLikes($commentId: Int) {
    decrementCommentLikes(commentId: $commentId)
  }
`
