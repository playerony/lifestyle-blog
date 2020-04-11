import gql from 'graphql-tag'

export const ARTICLE_LIST_QUERY = gql`
  query {
    articleList {
      title
      isPublic
      articleId
      createdAt
      description
      readingTime
      categoryList {
        categoryId
      }
      image {
        photoUrl
      }
    }
  }
`
