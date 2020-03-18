import gql from 'graphql-tag'

export const UPDATE_ARTICLE_MUTATION = gql`
  mutation UpdateArticle($articleId: Int, $article: ArticleSaveRequest) {
    updateArticle(articleId: $articleId, article: $article) {
      articleId
    }
  }
`
