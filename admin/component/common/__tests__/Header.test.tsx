import React, { ReactElement } from 'react'
import { mount, ReactWrapper } from 'enzyme'

import Switch from '../../generic/Switch'
import ThemeProviderMock from '@component/utility/ThemeProviderMock'

import EThemeMode from '@type/common/EThemeMode'

import Memory from '@utility/Memory'

import { AUTH_TOKEN } from '@config/constant'

jest.mock('../../../config/keys', () => ({
  cryptoKey: 'cryptoKey'
}))
jest.mock('../../../hook/context/useTheme', () => () => ({
  mode: EThemeMode,
  toggle: jest.fn()
}))
jest.mock('react-router-dom', () => {
  const originalModule = jest.requireActual('react-router-dom')

  return {
    __esModule: true,
    ...originalModule,
    useHistory: () => ({ push: jest.fn() })
  }
})

import Header from '../Header'

const mountComponent = (element: ReactElement): ReactWrapper =>
  mount(<ThemeProviderMock>{element}</ThemeProviderMock>)

describe('Header Component', () => {
  it('should render', () => {
    const wrapper = mountComponent(<Header />)

    expect(wrapper.exists()).toBeTruthy()
  })

  it('should be wrapped into a header tag', () => {
    const wrapper = mountComponent(<Header />)

    expect(wrapper.find('header')).toBeTruthy()
  })

  describe('logo icon', () => {
    afterEach(() => {
      Memory.remove(AUTH_TOKEN)
    })

    it('should render', () => {
      Memory.set(AUTH_TOKEN, 'AUTH_TOKEN')
      const wrapper = mountComponent(<Header />)

      expect(
        wrapper
          .find('svg')
          .first()
          .props().onClick
      ).toBeDefined()
      expect(
        wrapper
          .find('use')
          .first()
          .props().xlinkHref
      ).toEqual('#logo')
    })

    it('should not render', () => {
      const wrapper = mountComponent(<Header />)

      expect(
        wrapper
          .find('use')
          .first()
          .props().xlinkHref
      ).not.toEqual('#logo')
    })
  })

  describe('theme switch', () => {
    it('should render sun icon', () => {
      const wrapper = mountComponent(<Header />)

      expect(wrapper.find('use').get(0).props.xlinkHref).toEqual('#sun')
    })

    it('should render Switch component', () => {
      const wrapper = mountComponent(<Header />)

      expect(wrapper.exists(Switch)).toBeTruthy()
      expect(wrapper.find(Switch).props().onChange).toBeDefined()
      expect(wrapper.find(Switch).props().initialValue).toBeFalsy()
    })

    it('should render moon icon', () => {
      const wrapper = mountComponent(<Header />)
      expect(wrapper.find('use').get(1).props.xlinkHref).toEqual('#moon')
    })
  })

  describe('logout icon', () => {
    afterEach(() => {
      Memory.remove(AUTH_TOKEN)
    })

    it('should render', () => {
      Memory.set(AUTH_TOKEN, 'AUTH_TOKEN')
      const wrapper = mountComponent(<Header />)

      expect(
        wrapper
          .find('svg')
          .last()
          .props().onClick
      ).toBeDefined()
      expect(
        wrapper
          .find('use')
          .last()
          .props().xlinkHref
      ).toEqual('#logout')
    })

    it('should not render', () => {
      const wrapper = mountComponent(<Header />)

      expect(
        wrapper
          .find('use')
          .last()
          .props().xlinkHref
      ).not.toEqual('#logout')
    })
  })
})
