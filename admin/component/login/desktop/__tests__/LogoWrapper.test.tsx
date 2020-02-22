import React from 'react'
import { mount, ReactWrapper } from 'enzyme'

import LogoWrapper from '../LogoWrapper'

import ThemeProviderMock from '@admin/component/utility/ThemeProviderMock'

const mountComponent = (element: React.ReactElement): ReactWrapper =>
  mount(<ThemeProviderMock>{element}</ThemeProviderMock>)

describe('LogoWrapper Component', () => {
  it('should render', () => {
    const wrapper = mountComponent(<LogoWrapper />)

    expect(wrapper.exists()).toBeTruthy()
  })

  it('should render svg logo', () => {
    const wrapper = mountComponent(<LogoWrapper />)

    expect(wrapper.find('use').props().xlinkHref).toEqual('#logo')
  })
})
