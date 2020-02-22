import React from 'react'
import { MockLink } from 'apollo-link-mock'
import { ApolloClient } from 'apollo-client'
import { ApolloProvider } from 'react-apollo-hooks'
import { InMemoryCache } from 'apollo-cache-inmemory'

import { IApolloMockProviderProps } from './ApolloProviderMock.type'

const ApolloProviderMock = ({
  mockList,
  children
}: IApolloMockProviderProps): JSX.Element => {
  const client = new ApolloClient({
    link: new MockLink(mockList),
    cache: new InMemoryCache()
  })

  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  )
}

export default ApolloProviderMock