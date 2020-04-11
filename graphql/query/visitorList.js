import gql from 'graphql-tag'

export const VISITOR_LIST_QUERY = gql`
  query {
    visitorList {
      articleId
      ipAddress
      userAgent
      createdAt
    }
  }
`
