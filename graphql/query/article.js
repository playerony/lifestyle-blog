import gql from 'graphql-tag'

export const ARTICLE_QUERY = gql`
  query ArticleById($articleId: Int) {
    articleById(articleId: $articleId) {
      content
    }
  }
`
