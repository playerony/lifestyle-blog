import gql from 'graphql-tag'

const CATEGORY_LIST_QUERY = gql`
  query {
    categoryList {
      name
      categoryId
    }
  }
`

export default {
  query: CATEGORY_LIST_QUERY,
  fetchPolicy: 'cache-first'
}
