import React from 'react'
import { mount, ReactWrapper } from 'enzyme'

import Button from '@component/generic/Button'

jest.mock('react-router-dom', () => {
  const originalModule = jest.requireActual('react-router-dom')

  return {
    __esModule: true,
    ...originalModule,
    useHistory: () => ({ push: jest.fn() })
  }
})

const setUp = (): ReactWrapper => {
  const BackButton = require('../BackButton').default

  return mount(<BackButton />)
}

describe('BackButton Component', () => {
  it('should render', () => {
    const wrapper = setUp()

    expect(wrapper.exists()).toBeTruthy()
  })

  describe('Button Component', () => {
    it('should render', () => {
      const wrapper = setUp()

      expect(wrapper.exists(Button)).toBeTruthy()
    })

    it('should contain proper props', () => {
      const wrapper = setUp()
      const buttonProps = wrapper.find(Button).props()

      expect(buttonProps.circle).toBeTruthy()
      expect(buttonProps.onClick).toBeDefined()
      expect(buttonProps.floating).toEqual('left')
      expect(wrapper.find(Button).find('use').props().xlinkHref).toEqual('#left-arrow')
    })
  })
})