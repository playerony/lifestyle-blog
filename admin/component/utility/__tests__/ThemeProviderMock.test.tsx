import React from 'react'
import { shallow } from 'enzyme'
import { ThemeProviderProps } from 'styled-components'

const themeMock = jest.fn()
jest.doMock('styled-components', () => ({
  ThemeProvider
}))

describe('ThemeProviderMock Component', () => {
  it('should render', () => {
    const ThemeProviderMock = require('../ThemeProviderMock').default
    const wrapper = shallow(<Component />, { wrappingComponent: ThemeProviderMock })

    expect(wrapper.exists()).toBeTruthy()
  })

  it('should constain proper theme', () => {
    const ThemeProviderMock = require('../ThemeProviderMock').default
    shallow(<Component />, { wrappingComponent: ThemeProviderMock })

    expect(themeMock).toHaveBeenCalledWith(THEME_MOCK)
  })
})

const Component = (): JSX.Element => <h1>Element</h1>

const ThemeProvider = ({ theme, children }: ThemeProviderProps<{}>): JSX.Element => {
  themeMock(theme)

  return children as JSX.Element
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
