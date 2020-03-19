import React, { ReactElement } from 'react'
import { mount, ReactWrapper } from 'enzyme'

import Button from '@component/generic/Button'
import ThemeProviderMock from '@component/utility/ThemeProviderMock'

const mountComponent = (element: ReactElement): ReactWrapper =>
  mount(<ThemeProviderMock>{element}</ThemeProviderMock>)

const setUp = (parameters: { code: string }): ReactWrapper => {
  jest.doMock('react-router-dom', () => {
    const originalModule = jest.requireActual('react-router-dom')

    return {
      __esModule: true,
      ...originalModule,
      useParams: () => (parameters),
      useHistory: () => ({ push: jest.fn() })
    }
  })

  const Error = require('../Error').default
  return mountComponent(<Error />)
}

describe('Error Page', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should render', () => {
    const wrapper = setUp({ code: '404' })

    expect(wrapper.exists()).toBeTruthy()
  })

  it('should render robot icon', () => {
    const wrapper = setUp({ code: '404' })

    expect(wrapper.find('use').props().xlinkHref).toEqual('#robot')
  })

  it('should render passed code', () => {
    const wrapper = setUp({ code: '404' })

    expect(wrapper.find('h1').props().children).toEqual('404')
  })

  it('should render proper message', () => {
    const wrapper = setUp({ code: '404' })

    expect(wrapper.find('label').props().children).toEqual('Not found.')
  })

  it('should render refresh button', () => {
    const wrapper = setUp({ code: '404' })

    expect(wrapper.find(Button).props().onClick).toBeDefined()
    expect(wrapper.find(Button).props().children).toEqual('Refresh')
  })
})
