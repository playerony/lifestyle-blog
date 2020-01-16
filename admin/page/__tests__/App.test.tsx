import * as React from 'react'
import { mount, ReactWrapper } from 'enzyme'
import { ThemeProvider } from 'styled-components'

import App from '../App'

import theme from '@style/theme'

const mountComponent = (element: React.ReactElement): ReactWrapper =>
  mount(<ThemeProvider theme={theme}>{element}</ThemeProvider>)

describe('App Component', () => {
  it('should render', () => {
    const wrapper = mountComponent(<App />)

    expect(wrapper).toBeDefined()
  })
})
