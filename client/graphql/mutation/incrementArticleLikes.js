import gql from 'graphql-tag'

export const INCREMENT_ARTICLE_LIKES_MUTATION = gql`
  mutation IncrementArticleLikes($articleId: Int) {
    incrementArticleLikes(articleId: $articleId)
  }
`
