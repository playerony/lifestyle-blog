import React from 'react'
import { mount } from 'enzyme'
import { Route } from 'react-router-dom'
import { MemoryRouter } from 'react-router'

import ErrorPage from '@page/Error'

import routeList from '@config/routeList'

jest.doMock('../../component/utility/PrivateRoute', () => Route)

jest.mock('../../page/Log', () => LogPageMock)
jest.mock('../../page/Login', () => LoginPageMock)
jest.mock('../../page/Metric', () => MetricPageMock)
jest.mock('../../component/common/Header', () => HeaderMock)
jest.mock('../../page/article/ArticleList', () => ArticleListPageMock)
jest.mock('../../page/article/ArticleEdit', () => ArticleEditPageMock)
jest.mock('../../page/article/ArticleCreate', () => ArticleCreatePageMock)

jest.mock('react-router-dom', () => {
  const originalModule = jest.requireActual('react-router-dom')

  return {
    __esModule: true,
    ...originalModule,
    BrowserRouter: ({ children }: { children: React.ReactChild }) => (
      <div>{children}</div>
    )
  }
})

describe('Routing Service', () => {
  beforeAll(() => {
    console.error = jest.fn()
  })

  it('should render ArticleListPage as default', () => {
    const Routing = require('../Routing').default

    const wrapper = mount(
      <MemoryRouter initialEntries={[routeList.base]}>
        <Routing />
      </MemoryRouter>
    )

    expect(wrapper.find(ArticleListPageMock)).toHaveLength(1)
  })

  describe('ErrorPage', () => {
    it('should show if path is not defined', () => {
      const Routing = require('../Routing').default

      const wrapper = mount(
        <MemoryRouter initialEntries={['/test']}>
          <Routing />
        </MemoryRouter>
      )

      expect(wrapper.find(ErrorPage)).toHaveLength(1)
    })

    it('should show if error path was provided', () => {
      const Routing = require('../Routing').default

      const wrapper = mount(
        <MemoryRouter initialEntries={['/admin/error/404']}>
          <Routing />
        </MemoryRouter>
      )

      expect(wrapper.find(ErrorPage)).toHaveLength(1)
    })
  })

  it('should render LogPage', () => {
    const Routing = require('../Routing').default

    const wrapper = mount(
      <MemoryRouter initialEntries={[routeList.log]}>
        <Routing />
      </MemoryRouter>
    )

    expect(wrapper.find(LogPageMock)).toHaveLength(1)
  })

  it('should render LoginPage', () => {
    const Routing = require('../Routing').default

    const wrapper = mount(
      <MemoryRouter initialEntries={[routeList.login]}>
        <Routing />
      </MemoryRouter>
    )

    expect(wrapper.find(LoginPageMock)).toHaveLength(1)
  })

  it('should render MetricPage', () => {
    const Routing = require('../Routing').default

    const wrapper = mount(
      <MemoryRouter initialEntries={[routeList.metric]}>
        <Routing />
      </MemoryRouter>
    )

    expect(wrapper.find(MetricPageMock)).toHaveLength(1)
  })

  describe('article routes', () => {
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

    it('should render ArticleEditPage', () => {
      const Routing = require('../Routing').default

      const wrapper = mount(
        <MemoryRouter initialEntries={['/admin/article/1/edit']}>
          <Routing />
        </MemoryRouter>
      )

      expect(wrapper.find(ArticleEditPageMock)).toHaveLength(1)
    })
  })
})

const HeaderMock = (): JSX.Element => <div>Header</div>

const LogPageMock = (): JSX.Element => <div>Log Page</div>

const LoginPageMock = (): JSX.Element => <div>Login Page</div>

const MetricPageMock = (): JSX.Element => <div>Metric Page</div>

const ArticleListPageMock = (): JSX.Element => <div>Article List Page</div>

const ArticleEditPageMock = (): JSX.Element => <div>Article Edit Page</div>

const ArticleCreatePageMock = (): JSX.Element => <div>Article Create Page</div>
