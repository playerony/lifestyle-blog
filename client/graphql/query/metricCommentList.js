import gql from 'graphql-tag'

const COMMENT_LIST_QUERY = gql`
  query {
    commentList {
      articleId
      createdAt
    }
  }
`

export default {
  query: COMMENT_LIST_QUERY,
  fetchPolicy: 'cache-first'
}
