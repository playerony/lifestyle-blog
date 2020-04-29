import gql from 'graphql-tag'

const ARTICLE_QUERY = gql`
  query ArticleById($articleId: Int) {
    articleById(articleId: $articleId) {
      title
      content
      description
      readingTime
    }
  }
`

export default {
  query: ARTICLE_QUERY,
  fetchPolicy: 'cache-first'
}
