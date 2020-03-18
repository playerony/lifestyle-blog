import React from 'react'
import { mount } from 'enzyme'
import { ThemeProviderProps } from 'styled-components'

import EThemeMode from '@type/common/EThemeMode'

import useTheme from '@hook/context/useTheme'

const themeMock = jest.fn()
const manageThemeContext = jest.fn()

jest.doMock('styled-components', () => ({
  ThemeProvider: ThemeProviderMock
}))

describe('ThemeProvider Provider', () => {
  it('should render', () => {
    const ThemeProvider = require('../ThemeProvider').default
    const wrapper = mount(<ComponentMock />, { wrappingComponent: ThemeProvider })

    expect(wrapper.exists()).toBeTruthy()
  })

  it('component should contain proper context data', () => {
    const ThemeProvider = require('../ThemeProvider').default
    mount(<ComponentMock />, { wrappingComponent: ThemeProvider })

    expect(manageThemeContext).toHaveBeenCalledWith(MANAGE_THEME_CONTEXT_MOCK)
  })

  it('should pass a proper theme to the app', () => {
    const ThemeProvider = require('../ThemeProvider').default
    mount(<ComponentMock />, { wrappingComponent: ThemeProvider })

    expect(themeMock).toHaveBeenCalledWith(THEME_MOCK)
  })
})

const ThemeProviderMock = ({ theme, children }: ThemeProviderProps<{}>): JSX.Element => {
  themeMock(theme)

  return children as JSX.Element
}

const ComponentMock = (): JSX.Element => {
  const theme = useTheme()
  manageThemeContext(theme)

  return <h1>Component</h1>
}

const MANAGE_THEME_CONTEXT_MOCK = {
  mode: EThemeMode.LIGHT,
  toggle: jasmine.any(Function)
}

const THEME_MOCK = {
  color: {
    background: "#f8fbff",
    border: "#999999",
    card: "#ffffff",
    icon: "#274f6f",
    input: "#ffffff",
    text: "#274f6f",
  }
}
