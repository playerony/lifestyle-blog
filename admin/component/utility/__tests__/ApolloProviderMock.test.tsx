import React from 'react'
import { shallow } from 'enzyme'
import { ApolloProviderProps } from 'react-apollo-hooks'

const providerCall = jest.fn()

jest.doMock('react-apollo-hooks', () => ({
  ApolloProvider: ApolloProviderMockMock
}))

describe('ApolloProviderMock Component', () => {
  it('should render', () => {
    const ApolloProviderMock = require('../ApolloProviderMock').default
    const wrapper = shallow(<Component />, { wrappingComponent: ApolloProviderMock })

    expect(wrapper.exists()).toBeTruthy()
  })

  it('should set client property', () => {
    const ApolloProviderMock = require('../ApolloProviderMock').default
    shallow(<Component />, { wrappingComponent: ApolloProviderMock })

    expect(providerCall).toHaveBeenCalled()
  })
})

const Component = (): JSX.Element => <h1>Element</h1>

const ApolloProviderMockMock = ({ client, children }: ApolloProviderProps<{}>): JSX.Element => {
  providerCall(client)

  return children as JSX.Element
}
