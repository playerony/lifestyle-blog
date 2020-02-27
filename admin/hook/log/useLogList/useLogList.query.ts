import gql from 'graphql-tag'

export const LOG_LIST_QUERY = gql`
  query {
    logList {
      createdAt
    }
  }
`
