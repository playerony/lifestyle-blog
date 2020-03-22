import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloLink } from 'apollo-link'

class HttpLink {
  constructor(object: object) { }
}

class UploadLink {
  constructor() { }
}

class ApolloLinkMock {
  public concat(object: object) { return new ApolloLink() }
}

jest.doMock('apollo-link-http', () => ({ HttpLink }))
jest.doMock('apollo-link-context', () => ({ setContext: () => new ApolloLinkMock() }))
jest.doMock('apollo-upload-client', () => ({ createUploadLink: () => new UploadLink() }))

describe('App Component', () => {
  beforeAll(() => {
    window.scroll = jest.fn()
  })

  it('render without crashing', () => {
    const App = require('../App').default
    const div = document.createElement('div');

    ReactDOM.render(<App />, div);
  })
})
