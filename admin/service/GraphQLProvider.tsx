import React from 'react'
import { ApolloLink } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import { ApolloClient } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider as ApolloHookProvider } from '@apollo/react-hooks'

import keys from '@config/keys'

const httpLink = new HttpLink({
  uri: `${keys.serverUrl}/graphql`
})

const client = new ApolloClient({
  link: ApolloLink.from([httpLink]),
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