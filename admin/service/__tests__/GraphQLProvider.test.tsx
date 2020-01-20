import React from 'react'
import { mount } from 'enzyme'

import GraphQLProvider from '../GraphQLProvider'

const apolloLinkFromMock = jest.fn()
const httpLinkConstructorMock = jest.fn()
const apolloClientConstructorMock = jest.fn()

class ApolloLink {
  public static from = apolloLinkFromMock.mockImplementation(() => ApolloLink)
}

class InMemoryCache { }

class HttpLink {
  constructor(object: object) {
    httpLinkConstructorMock(object)
  }
}

class ApolloClient {
  constructor(object: object) {
    apolloClientConstructorMock(object)
  }
}

jest.doMock('apollo-link', () => ({ ApolloLink }))
jest.doMock('apollo-link-http', () => ({ HttpLink }))
jest.doMock('apollo-client', () => ({ ApolloClient }))
jest.doMock('apollo-cache-inmemory', () => ({ InMemoryCache }))
jest.doMock('../../config/keys', () => ({ serverUrl: 'localhost' }))

describe('GraphQLProvider Provider', () => {
  let GraphQL: typeof GraphQLProvider

  beforeEach(() => {
    GraphQL = require('../GraphQLProvider').default
  })

  it('should set a proper config', done => {
    const Component = (): null => {
      expect(httpLinkConstructorMock).toHaveBeenCalledWith({ uri: 'localhost/graphql' })
      expect(apolloLinkFromMock).toHaveBeenCalledWith([new HttpLink({})])
      expect(apolloClientConstructorMock).toHaveBeenCalledWith({
        link: ApolloLink.from([new HttpLink({ uri: 'localhost/graphql' })]),
        cache: new InMemoryCache()
      })

      done()

      return null
    }

    mount(<GraphQL><Component /></GraphQL>)
  })
})