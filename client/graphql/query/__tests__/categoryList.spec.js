import gql from 'graphql-tag'

import categoryListQuery from '../categoryList'

describe('categoryList Query', () => {
  it('should import', () => {
    expect(typeof categoryListQuery).toBeDefined()
  })

  it('should contain proper query and fetch policy', () => {
    expect(categoryListQuery).toEqual({
      query: QUERY_FORMULA,
      fetchPolicy: 'cache-first'
    })
  })
})

const QUERY_FORMULA = gql`
  query {
    categoryList {
      name
      categoryId
    }
  }
`
