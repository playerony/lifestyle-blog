import gql from 'graphql-tag'

import articleListQuery from '../articleList'

describe('articleList query', () => {
  it('should import', () => {
    expect(typeof articleListQuery).toBeDefined()
  })

  it('should contain proper query and fetch policy', () => {
    expect(articleListQuery).toEqual({
      query: QUERY_FORMULA,
      fetchPolicy: 'cache-first'
    })
  })
})

const QUERY_FORMULA = gql`
  query {
    articleList {
      title
      isPublic
      articleId
      createdAt
      description
      readingTime
      categoryList {
        categoryId
      }
      image {
        photoUrl
      }
    }
  }
`
