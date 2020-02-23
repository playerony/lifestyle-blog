import gql from 'graphql-tag'

export const UPDATE_ARTICLE_MUTATION = gql`
  mutation UpdateArticle($articleId: Int!, $article: ArticleCreateRequest!) {
    updateArticle(articleId: $articleId, article: $article) {
      articleId
    }
  }
`
