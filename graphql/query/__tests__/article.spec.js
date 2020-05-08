import gql from 'graphql-tag'

import articleQuery from '../article'

describe('article query', () => {
  it('should import', () => {
    expect(typeof articleQuery).toBeDefined()
  })

  it('should contain proper query and fetch policy', () => {
    expect(articleQuery).toEqual({
      query: QUERY_FORMULA,
      fetchPolicy: 'cache-first'
    })
  })
})

const QUERY_FORMULA = gql`
  query ArticleById($articleId: Int) {
    articleById(articleId: $articleId) {
      title
      likes
      content
      description
      readingTime
      categoryList {
        name
        categoryId
      }
    }
  }
`
