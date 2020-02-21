import React from 'react'
import { MockLink, MockedResponse } from 'apollo-link-mock'
import { ApolloClient } from 'apollo-client'
import { ApolloProvider } from 'react-apollo-hooks'
import { InMemoryCache } from 'apollo-cache-inmemory'

interface IApolloMockProviderProps {
  mockList: MockedResponse[]
  children: React.ReactNode
}

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
