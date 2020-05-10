import gql from 'graphql-tag'

export const ARTICLE_LIST_QUERY = gql`
  query {
    articleList {
      title
      likes
      isPublic
      articleId
      createdAt
      description
      categoryList {
        categoryId
        name
      }
      image {
        photoUrl
      }
    }
  }
`
