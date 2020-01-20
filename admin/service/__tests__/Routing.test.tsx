import React from 'react'
import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router';

import routeList from '@config/routeList'

jest.doMock('../../page/LoginPage', () => LoginPageMock)
jest.mock('react-router-dom', () => {
  const originalModule = jest.requireActual('react-router-dom');

  return {
    __esModule: true,
    ...originalModule,
    BrowserRouter: ({ children }: { children: React.ReactChild }) => <div>{children}</div>
  };
});

describe('Routing Service', () => {
  it('should render LoginPage as default', () => {
    const Routing = require('../Routing').default

    const wrapper = mount(
      <MemoryRouter initialEntries={[routeList.baseUrl]}>
        <Routing />
      </MemoryRouter>
    )

    expect(wrapper.find(LoginPageMock)).toHaveLength(1)
  })

  it('should render any route', () => {
    const Routing = require('../Routing').default

    const wrapper = mount(
      <MemoryRouter initialEntries={['/test']}>
        <Routing />
      </MemoryRouter>
    )

    expect(wrapper.find('div')).toHaveLength(1)
  })

  it('should render LoginPage', () => {
    const Routing = require('../Routing').default

    const wrapper = mount(
      <MemoryRouter initialEntries={[routeList.loginPageUrl]}>
        <Routing />
      </MemoryRouter>
    )

    expect(wrapper.find(LoginPageMock)).toHaveLength(1)
  })
})

const LoginPageMock = (): JSX.Element => <div>Login Page</div>
