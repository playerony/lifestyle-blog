import React from 'react'
import { ApolloLink } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import { ApolloClient } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import { setContext } from 'apollo-link-context'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider as ApolloHookProvider } from '@apollo/react-hooks'

import Memory from '@utility/Memory'

import keys from '@config/keys'
import { AUTH_TOKEN } from '@config/constant'

const httpLink = new HttpLink({
  uri: `${keys.serverUrl}/graphql`
})

const authLink = setContext((_, { headers }) => {
  const token = Memory.get(AUTH_TOKEN)

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
})

const client = new ApolloClient({
  link: ApolloLink.from([authLink.concat(httpLink)]),
  cache: new InMemoryCache()
})

interface IGraphQLProviderProps {
  children: React.ReactNode
}

const GraphQLProvider = ({ children }: IGraphQLProviderProps): JSX.Element => (
  <ApolloProvider client={client}>
    <ApolloHookProvider client={client}>{children}</ApolloHookProvider>
  </ApolloProvider>
)

export default GraphQLProvider