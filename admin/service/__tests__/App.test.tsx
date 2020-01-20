import React from 'react'
import ReactDOM from 'react-dom'

class HttpLink {
  constructor(object: object) { }
}

jest.doMock('apollo-link-http', () => ({ HttpLink }))

describe('App Component', () => {
  it('render without crashing', () => {
    const App = require('../App').default
    const div = document.createElement('div');

    ReactDOM.render(<App />, div);
  })
})