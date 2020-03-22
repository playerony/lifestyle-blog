import React from 'react'
import { History } from 'history'
import { mount, ReactWrapper } from 'enzyme'

import routeList from '@config/routeList'

const createMemoryMock = (token: string | null): typeof jest => {
  let memoryGetMock = jest.fn().mockImplementationOnce(() => token)

  class MemoryMock {
    public static get = memoryGetMock
  }

  return jest.doMock('../../../utility/Memory', () => MemoryMock)
}

const createAuthenticationMock = (isAuthenticated: boolean, error: any | undefined = undefined, loading: boolean = false): typeof jest =>
  jest.doMock('../../../hook/login/useAuthenticated', () => () => ({ isAuthenticated, error, loading }))

const setUp = (): ReactWrapper => {
  const PrivateRoute = require('../PrivateRoute').default
  const { MemoryRouter } = require('react-router-dom')

  return mount(
    <MemoryRouter initialEntries={[routeList.article.list]}>
      <PrivateRoute>
        <ComponentMock />
      </PrivateRoute>
    </MemoryRouter>
  )
}

describe('PrivateRoute Component', () => {
  afterEach(() => {
    jest.resetModules()
    createMemoryMock(null)
  })

  it('should render null when user token is during checking', () => {
    createMemoryMock(null)
    createAuthenticationMock(true, undefined, true)
    const wrapper = setUp()

    expect(wrapper).toEqual({})
  })

  it('should render component if user has been authenticated', () => {
    createMemoryMock('token')
    createAuthenticationMock(true, undefined, false)
    const wrapper = setUp()

    expect(wrapper.exists(ComponentMock)).toBeTruthy()
  })

  describe('redirect case', () => {
    it('should redirect to login page', () => {
      createAuthenticationMock(false, undefined, false)
      createMemoryMock('token')
      const wrapper = setUp()

      const history: History = wrapper.find('Router').prop('history')
      expect(history.location.pathname).toEqual(routeList.login)
    })
  })
})

const ComponentMock = (): JSX.Element => <div>Example Component</div>
