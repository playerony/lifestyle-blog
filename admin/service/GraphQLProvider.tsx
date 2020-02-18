import React from 'react'
import { GraphQLError } from 'graphql'
import { ApolloLink } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import { ApolloClient } from 'apollo-client'
import { RetryLink } from 'apollo-link-retry'
import { ApolloProvider } from 'react-apollo'
import { setContext } from 'apollo-link-context'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { createUploadLink } from 'apollo-upload-client'
import { onError, ErrorResponse } from 'apollo-link-error'
import { ApolloProvider as ApolloHookProvider } from 'react-apollo-hooks'

import Memory from '@utility/Memory'

import keys from '@config/keys'
import { AUTH_TOKEN } from '@config/constant'

const httpLink = new HttpLink({
  uri: `${keys.serverUrl}/graphql`
})

const uploadLink = createUploadLink({
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

const errorLink = onError(({ graphQLErrors, networkError }: ErrorResponse): void => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, path }: GraphQLError): void => {
      console.info(
        `[GraphQL error]: Message: ${message}, Path: ${path}`
      )
    })
  }

  if (networkError) console.info(`[Network error]: ${networkError}`)
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

const link = ApolloLink.from([
  errorLink,
  retryLink,
  authLink.concat(uploadLink),
  authLink.concat(httpLink)
])

const client = new ApolloClient({
  link,
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
