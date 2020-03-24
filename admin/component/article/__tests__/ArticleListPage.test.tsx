import React, { ReactElement } from 'react'
import { mount, ReactWrapper } from 'enzyme'

import Button from '@component/generic/Button'
import FabButton from '@component/generic/FabButton'
import Dashboard from '../ArticleListPage/Dashboard'
import ThemeProviderMock from '@component/utility/ThemeProviderMock'

jest.mock('../../../hook/category/useCategoryList', () => () => ({
  data: [],
  loading: true
}))
jest.mock('react-router-dom', () => {
  const originalModule = jest.requireActual('react-router-dom')

  return {
    __esModule: true,
    ...originalModule,
    useHistory: () => ({ push: jest.fn() })
  }
})

const mountComponent = (element: ReactElement): ReactWrapper =>
  mount(<ThemeProviderMock>{element}</ThemeProviderMock>)

describe('ArticleListPage Component', () => {
  it('should render', () => {
    const ArticleListPage = require('../ArticleListPage').default
    const wrapper = mountComponent(<ArticleListPage articleList={[]} />)

    expect(wrapper.exists()).toBeTruthy()
  })

  describe('Dashboard Component', () => {
    it('should render', () => {
      const ArticleListPage = require('../ArticleListPage').default
      const wrapper = mountComponent(<ArticleListPage articleList={[]} />)

      expect(wrapper.exists(Dashboard)).toBeTruthy()
    })

    it('should contain proper data', () => {
      const ArticleListPage = require('../ArticleListPage').default
      const wrapper = mountComponent(<ArticleListPage articleList={[]} />)

      expect(wrapper.find(Dashboard).props().articleList).toEqual([])
    })
  })

  describe('FabButton Component', () => {
    it('should render', () => {
      const ArticleListPage = require('../ArticleListPage').default
      const wrapper = mountComponent(<ArticleListPage articleList={[]} />)

      expect(wrapper.exists(FabButton)).toBeTruthy()
    })

    it('should render width four children', () => {
      const ArticleListPage = require('../ArticleListPage').default
      const wrapper = mountComponent(<ArticleListPage articleList={[]} />)

      expect(wrapper.find(FabButton).props().children).toHaveLength(4)
    })

    it('should render Log Button', () => {
      const ArticleListPage = require('../ArticleListPage').default
      const wrapper = mountComponent(<ArticleListPage articleList={[]} />)

      const logButtonProps = wrapper
        .find(Button)
        .first()
        .props()
      expect(logButtonProps.circle).toBeTruthy()
      expect(logButtonProps.onClick).toBeDefined()
      expect(
        wrapper
          .find(Button)
          .first()
          .find('use')
          .props().xlinkHref
      ).toEqual('#log')
    })

    it('should render Metric Button', () => {
      const ArticleListPage = require('../ArticleListPage').default
      const wrapper = mountComponent(<ArticleListPage articleList={[]} />)

      const logButtonProps = wrapper.find(Button).get(1).props
      expect(logButtonProps.circle).toBeTruthy()
      expect(logButtonProps.onClick).toBeDefined()
      expect(
        wrapper
          .find('use')
          .last()
          .props().xlinkHref
      ).toEqual('#metric')
    })

    it('should render Create Article Button', () => {
      const ArticleListPage = require('../ArticleListPage').default
      const wrapper = mountComponent(<ArticleListPage articleList={[]} />)

      const logButtonProps = wrapper.find(Button).get(2).props
      expect(logButtonProps.circle).toBeTruthy()
      expect(logButtonProps.onClick).toBeDefined()
      expect(logButtonProps.children).toEqual('+')
    })

    it('should render FabMenu Trigger Button', () => {
      const ArticleListPage = require('../ArticleListPage').default
      const wrapper = mountComponent(<ArticleListPage articleList={[]} />)

      const logButtonProps = wrapper
        .find(Button)
        .last()
        .props()
      expect(logButtonProps.circle).toBeTruthy()
      expect(logButtonProps.children).toEqual('+')
    })
  })
})
