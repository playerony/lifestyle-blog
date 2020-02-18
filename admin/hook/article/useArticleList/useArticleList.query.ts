import gql from 'graphql-tag'

export const ARTICLE_LIST_QUERY = gql`
  query {
    articleList {
      title
      articleId
      description
      categoryList {
        categoryId
      }
      image {
        filename
      }
    }

    visitorList {
      articleId
      ipAddress
      createdAt
    }
  }
`
