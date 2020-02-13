import React, { ReactElement } from 'react'
import { mount, ReactWrapper } from 'enzyme'

import Header from '../Header'
import Switch from '../../generic/Switch'

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

describe('Header Component', () => {
  it('should render', () => {
    const wrapper = mountComponent(<Header />)

    expect(wrapper.exists()).toBeTruthy()
  })

  it('should render svg logo', () => {
    const wrapper = mountComponent(<Header />)

    expect(wrapper.find('use').first().props().xlinkHref).toEqual('#logo')
  })

  it('should render sun icon', () => {
    const wrapper = mountComponent(<Header />)

    expect(wrapper.find('use').get(1).props.xlinkHref).toEqual('#sun')
  })

  it('should render moon logo', () => {
    const wrapper = mountComponent(<Header />)

    expect(wrapper.find('use').get(2).props.xlinkHref).toEqual('#moon')
  })

  it('should render logout logo', () => {
    const wrapper = mountComponent(<Header />)

    expect(wrapper.find('svg').last().props().onClick).toBeDefined()
    expect(wrapper.find('use').last().props().xlinkHref).toEqual('#logout')
  })

  it('should render Switch component', () => {
    const wrapper = mountComponent(<Header />)

    expect(wrapper.exists(Switch)).toBeTruthy()
    expect(wrapper.find(Switch).props().onChange).toBeDefined()
    expect(wrapper.find(Switch).props().initialValue).not.toBeDefined()
  })
})