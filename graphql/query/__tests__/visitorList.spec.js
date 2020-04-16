import gql from 'graphql-tag'

import visitorListQuery from '../visitorList'

describe('visitorList query', () => {
  it('should import', () => {
    expect(typeof visitorListQuery).toBeDefined()
  })

  it('should contain proper query and fetch policy', () => {
    expect(visitorListQuery).toEqual({
      query: QUERY_FORMULA,
      fetchPolicy: 'cache-first'
    })
  })
})

const QUERY_FORMULA = gql`
  query {
    visitorList {
      articleId
      ipAddress
      userAgent
      createdAt
    }
  }
`
