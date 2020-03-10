import gql from 'graphql-tag'

export const TOGGLE_ARTICLE_PUBLIC_FLAG_MUTATION = gql`
  mutation ToggleArticlePublicFlag($articleId: Int, $isPublic: Boolean) {
    toggleArticlePublicFlag(articleId: $articleId, isPublic: $isPublic) {
      articleId
      isPublic
    }
  }
`
