import gql from 'graphql-tag'

const VISITOR_LIST_QUERY = gql`
  query {
    visitorList(onlyArticles: true) {
      articleId
      ipAddress
      userAgent
      createdAt
    }
  }
`

export default {
  query: VISITOR_LIST_QUERY,
  fetchPolicy: 'cache-first'
}
