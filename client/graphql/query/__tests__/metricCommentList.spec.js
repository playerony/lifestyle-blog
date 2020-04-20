import gql from 'graphql-tag'

import metricCommentListQuery from '../metricCommentList'

describe('metricCommentList query', () => {
  it('should import', () => {
    expect(typeof metricCommentListQuery).toBeDefined()
  })

  it('should contain proper query and fetch policy', () => {
    expect(metricCommentListQuery).toEqual({
      query: QUERY_FORMULA,
      fetchPolicy: 'cache-first'
    })
  })
})

const QUERY_FORMULA = gql`
  query {
    commentList {
      articleId
      createdAt
    }
  }
`
