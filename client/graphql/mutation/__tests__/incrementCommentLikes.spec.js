import gql from 'graphql-tag'

import { INCREMENT_COMMENT_LIKES_MUTATION } from '../incrementCommentLikes'

describe('incrementCommentLikes Mutation', () => {
  it('should import', () => {
    expect(typeof INCREMENT_COMMENT_LIKES_MUTATION).toBeDefined()
  })

  it('should contain proper fields', () => {
    expect(INCREMENT_COMMENT_LIKES_MUTATION).toEqual(MUTATION_FORMULA)
  })
})

const MUTATION_FORMULA = gql`
  mutation IncrementCommentLikes($commentId: Int) {
    incrementCommentLikes(commentId: $commentId)
  }
`
