import React from 'react'
import { mount, ReactWrapper } from 'enzyme'
import { ThemeProvider } from 'styled-components'

import LogoWrapper from '../LogoWrapper'

import theme from '@style/theme'

const mountComponent = (element: React.ReactElement): ReactWrapper =>
  mount(<ThemeProvider theme={theme}>{element}</ThemeProvider>)

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
