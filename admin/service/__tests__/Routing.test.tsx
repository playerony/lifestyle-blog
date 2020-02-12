import React from 'react'
import { mount } from 'enzyme'
import { Route } from 'react-router-dom'
import { MemoryRouter } from 'react-router'

import routeList from '@config/routeList'

jest.mock('../../page/Login', () => LoginPageMock)
jest.mock('../../component/common/Header', () => HeaderMock)
jest.mock('../../page/article/ArticleList', () => ArticleListPageMock)
jest.mock('../../page/article/ArticleCreate', () => ArticleCreatePageMock)

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
  it('should render ArticleCreatePage as default', () => {
    const Routing = require('../Routing').default

    const wrapper = mount(
      <MemoryRouter initialEntries={[routeList.base]}>
        <Routing />
      </MemoryRouter>
    )

    expect(wrapper.find(ArticleCreatePageMock)).toHaveLength(1)
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

  it('should render ArticleListPage', () => {
    const Routing = require('../Routing').default

    const wrapper = mount(
      <MemoryRouter initialEntries={[routeList.article.list]}>
        <Routing />
      </MemoryRouter>
    )

    expect(wrapper.find(ArticleListPageMock)).toHaveLength(1)
  })

  it('should render ArticleCreatePage', () => {
    const Routing = require('../Routing').default

    const wrapper = mount(
      <MemoryRouter initialEntries={[routeList.article.create]}>
        <Routing />
      </MemoryRouter>
    )

    expect(wrapper.find(ArticleCreatePageMock)).toHaveLength(1)
  })
})

const HeaderMock = (): JSX.Element => <div>Header</div>

const LoginPageMock = (): JSX.Element => <div>Login Page</div>

const ArticleListPageMock = (): JSX.Element => <div>Article List Page</div>

const ArticleCreatePageMock = (): JSX.Element => <div>Article Create Page</div>
