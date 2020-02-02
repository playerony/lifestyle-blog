import gql from 'graphql-tag'

export const CATEGORY_LIST_QUERY = gql`
  query {
    categoryList {
      name
      categoryId
    }
  }
`
