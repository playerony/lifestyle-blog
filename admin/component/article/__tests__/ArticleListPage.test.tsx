import React, { ReactElement } from 'react'
import { mount, ReactWrapper } from 'enzyme'

import Button from '@component/generic/Button'
import ArticleListPage from '../ArticleListPage'

import ThemeProviderMock from '@utility/ThemeProviderMock'

jest.mock('react-router-dom', () => {
  const originalModule = jest.requireActual('react-router-dom')

  return {
    __esModule: true,
    ...originalModule,
    useHistory: () => ({ push: jest.fn() })
  };
})

const mountComponent = (element: ReactElement): ReactWrapper =>
  mount(<ThemeProviderMock>{element}</ThemeProviderMock>)

describe('ArticleListPage Component', () => {
  it('should render', () => {
    const wrapper = mountComponent(<ArticleListPage />)

    expect(wrapper.exists()).toBeTruthy()
  })

  it('should render Button Component', () => {
    const wrapper = mountComponent(<ArticleListPage />)

    expect(wrapper.exists(Button)).toBeTruthy()
    expect(wrapper.find(Button).props().onClick).toBeDefined()
    expect(wrapper.find(Button).props().floating).toBeTruthy()
  })
})
