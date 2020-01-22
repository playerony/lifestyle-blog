import React from 'react'
import { ApolloLink } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import { ApolloClient } from 'apollo-client'
import { RetryLink } from 'apollo-link-retry'
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

const retryLink = new RetryLink({
  delay: {
    initial: 300,
    max: Infinity,
    jitter: true
  },
  attempts: {
    max: 2,
    retryIf: (error: string) => !Boolean(error)
  }
})

const authLink = setContext((_, { headers }) => {
  const token = Memory.get(AUTH_TOKEN)

  return {
    headers: {
      ...headers,
      authorization: token ? `${keys.jwtPrefix} ${token}` : null
    }
  }
})

const client = new ApolloClient({
  link: ApolloLink.from([retryLink, authLink.concat(httpLink)]),
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