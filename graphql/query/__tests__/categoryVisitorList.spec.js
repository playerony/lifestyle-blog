import gql from 'graphql-tag'

import categoryVisitorListQuery from '../categoryVisitorList'

describe('categoryVisitorList Query', () => {
  it('should import', () => {
    expect(typeof categoryVisitorListQuery).toBeDefined()
  })

  it('should contain proper query and fetch policy', () => {
    expect(categoryVisitorListQuery).toEqual({
      query: QUERY_FORMULA,
      fetchPolicy: 'cache-first'
    })
  })
})

const QUERY_FORMULA = gql`
  query VisitorListByCategoryId($categoryId: Int) {
    visitorListByCategoryId(categoryId: $categoryId) {
      articleId
      ipAddress
      userAgent
      createdAt
    }
  }
`
