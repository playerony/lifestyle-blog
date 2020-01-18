import React from 'react'
import { ApolloLink } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import { ApolloClient } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider as ApolloHooksProvider } from '@apollo/react-hooks'

const httpLink = new HttpLink({
  uri: 'http://localhost:3100/graphql'
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
    <ApolloHooksProvider client={client}>{children}</ApolloHooksProvider>
  </ApolloProvider>
)

export default GraphQLProvider