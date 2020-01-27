import React from 'react'
import { mount } from 'enzyme'
import { Route } from 'react-router-dom'
import { MemoryRouter } from 'react-router';

import routeList from '@config/routeList'

jest.mock('../../page/Login', () => LoginPageMock)
jest.mock('../../page/ArticleList', () => ArticleListPageMock)
jest.doMock('../../utility/PrivateRoute', () => Route)

jest.mock('react-router-dom', () => {
  const originalModule = jest.requireActual('react-router-dom');

  return {
    __esModule: true,
    ...originalModule,
    BrowserRouter: ({ children }: { children: React.ReactChild }) => <div>{children}</div>
  };
})

describe('Routing Service', () => {
  it('should render DashboardPage as default', () => {
    const Routing = require('../Routing').default

    const wrapper = mount(
      <MemoryRouter initialEntries={[routeList.baseUrl]}>
        <Routing />
      </MemoryRouter>
    )

    expect(wrapper.find(ArticleListPageMock)).toHaveLength(1)
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

  it('should render DashboardPage', () => {
    const Routing = require('../Routing').default

    const wrapper = mount(
      <MemoryRouter initialEntries={[routeList.article.list]}>
        <Routing />
      </MemoryRouter>
    )

    expect(wrapper.find(ArticleListPageMock)).toHaveLength(1)
  })
})

const LoginPageMock = (): JSX.Element => <div>Login Page</div>

const ArticleListPageMock = (): JSX.Element => <div>Article List Page</div>
