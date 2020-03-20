import React, { ReactElement } from 'react'
import { mount, ReactWrapper } from 'enzyme'

import Tooltip from '../Tooltip'

import ThemeProviderMock from '@component/utility/ThemeProviderMock'

const TooltipContent = (): JSX.Element => <h1>Tooltip</h1>

const mountComponent = (element: ReactElement): ReactWrapper =>
  mount(<ThemeProviderMock>{element}</ThemeProviderMock>)

const setUp = (title: string): ReactWrapper =>
  mountComponent(<Tooltip title={title}><TooltipContent /></Tooltip>)

describe('Tooltip Component', () => {
  it('should render', () => {
    const wrapper = setUp('title')

    expect(wrapper.exists()).toBeTruthy()
  })

  it('should contain title parameter as tooltip information', () => {
    const wrapper = setUp('title')

    expect(wrapper.exists('a')).toBeTruthy()
    expect(wrapper.find('a').props().title).toEqual('title')
  })

  it('should use a children as a tooltip trigger', () => {
    const wrapper = setUp('title')

    expect(wrapper.find(Tooltip).exists(TooltipContent)).toBeTruthy()
  })
})
