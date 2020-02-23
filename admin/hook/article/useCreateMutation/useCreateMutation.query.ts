import gql from 'graphql-tag'

export const CREATE_ARTICLE_MUTATION = gql`
  mutation CreateArticle($article: ArticleCreateRequest!) {
    createArticle(article: $article) {
      articleId
    }
  }
`
