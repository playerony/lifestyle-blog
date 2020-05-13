import gql from 'graphql-tag'

import visitorListQuery from '../visitorList'

describe('visitorList Query', () => {
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
    visitorList(onlyArticles: true) {
      articleId
      ipAddress
      userAgent
      createdAt
    }
  }
`
