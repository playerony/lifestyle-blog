import gql from 'graphql-tag'

export const CREATE_ARTICLE_QUERY = gql`
  mutation CreateArticle($article: ArticleCreateRequest!) {
    createArticle(article: $article) {
      articleId
    }
  }
`
