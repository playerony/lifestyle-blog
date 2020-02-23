import gql from 'graphql-tag'

export const ARTICLE_LIST_QUERY = gql`
  query {
    articleList {
      title
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
