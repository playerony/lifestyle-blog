import React from 'react'
import { mount } from 'enzyme'
import { History } from 'history'
import { MemoryRouter } from 'react-router-dom'

import routeList from '@config/routeList'

const createMemoryMock = (token: string | null) => {
  let memoryGetMock = jest.fn().mockImplementationOnce(() => token)

  class MemoryMock {
    public static get = memoryGetMock
  }

  return jest.doMock('../Memory', () => MemoryMock)
}

describe('PrivateRoute Component', () => {
  it('should render component if user has been authenticated', () => {
    createMemoryMock('token')
    const PrivateRoute = require('../PrivateRoute').default

    const wrapper = mount(
      <MemoryRouter initialEntries={[routeList.dashboardPageUrl]}>
        <PrivateRoute>
          <ComponentMock />
        </PrivateRoute>
      </MemoryRouter>
    )

    expect(wrapper.exists(ComponentMock)).toBeTruthy()
  })

  it('should redirect if user is not authenticated', () => {
    createMemoryMock(null)
    const PrivateRoute = require('../PrivateRoute').default

    const enzymeWrapper = mount(
      <MemoryRouter initialEntries={[routeList.dashboardPageUrl]}>
        <PrivateRoute>
          <ComponentMock />
        </PrivateRoute>
      </MemoryRouter>
    )

    const history: History = enzymeWrapper.find('Router').prop('history');
    expect(history.location.pathname).toBe(routeList.loginPageUrl);
  })
})

const ComponentMock = (): JSX.Element => <div>Example Component</div>