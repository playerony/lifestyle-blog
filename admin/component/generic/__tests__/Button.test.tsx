import React from 'react'
import { mount, ReactWrapper } from 'enzyme'
import { ThemeProvider } from 'styled-components'

import Button from '../Button'

import theme from '@style/theme'

const mountComponent = (element: React.ReactElement): ReactWrapper =>
  mount(<ThemeProvider theme={theme}>{element}</ThemeProvider>)

describe('Button Component', () => {
  it('should render', () => {
    const wrapper = mountComponent(<Button />)

    expect(wrapper).toBeDefined()
  })

  it('should render with new optional parameters', () => {
    const wrapper = mountComponent(<Button floating={true} marginTop={true} />)

    expect(wrapper).toBeDefined()
  })
})
