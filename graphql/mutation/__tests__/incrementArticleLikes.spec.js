import gql from 'graphql-tag'

import { INCREMENT_ARTICLE_LIKES_MUTATION } from '../incrementArticleLikes'

describe('incrementArticleLikes Mutation', () => {
  it('should import', () => {
    expect(typeof INCREMENT_ARTICLE_LIKES_MUTATION).toBeDefined()
  })

  it('should contain proper fields', () => {
    expect(INCREMENT_ARTICLE_LIKES_MUTATION).toEqual(MUTATION_FORMULA)
  })
})

const MUTATION_FORMULA = gql`
  mutation IncrementArticleLikes($articleId: Int) {
    incrementArticleLikes(articleId: $articleId)
  }
`
