import gql from 'graphql-tag'

const CATEGORY_VISITOR_LIST_QUERY = gql`
  query VisitorListByCategoryId($categoryId: Int) {
    visitorListByCategoryId(categoryId: $categoryId) {
      articleId
      ipAddress
      userAgent
      createdAt
    }
  }
`

export default {
  query: CATEGORY_VISITOR_LIST_QUERY,
  fetchPolicy: 'cache-first'
}
