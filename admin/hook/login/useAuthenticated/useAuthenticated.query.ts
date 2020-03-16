import gql from 'graphql-tag'

export const IS_AUTHENTICATED_QUERY = gql`
  query {
    isAuthenticated 
  }
`
