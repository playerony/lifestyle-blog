import React, { ReactElement } from 'react'
import { mount, ReactWrapper } from 'enzyme'
import { ThemeProvider } from 'styled-components'

import ControlButton from '../ControlButton'

import { IControlButtonProps } from '../ControlButton/ControlButton.type'

import theme from '@style/theme'

const mountComponent = (element: ReactElement): ReactWrapper =>
  mount(<ThemeProvider theme={theme}>{element}</ThemeProvider>)

describe('ControlButton Component', () => {
  it('should render', () => {
    const wrapper = mountComponent(<ControlButton {...PROPS_MOCK} />)

    expect(wrapper.exists()).toBeTruthy()
  })

  it('should render label', () => {
    const wrapper = mountComponent(<ControlButton {...PROPS_MOCK} />)

    expect(wrapper.exists('label')).toBeTruthy()

    const labelProps = wrapper.find('label').props()
    expect(labelProps.onMouseDown).toBeDefined()
    expect(labelProps.children).toEqual('Label')
  })
})

const PROPS_MOCK: IControlButtonProps = {
  style: "",
  active: true,
  label: 'Label',
  onToggle: jest.fn(),
}
