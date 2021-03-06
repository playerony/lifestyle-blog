import React, { ReactElement } from 'react'
import { mount, ReactWrapper } from 'enzyme'

import ControlButton from '../ControlButton'
import ThemeProviderMock from '@component/utility/ThemeProviderMock'

import { IControlButtonProps } from '../ControlButton/ControlButton.type'

const mountComponent = (element: ReactElement): ReactWrapper =>
  mount(<ThemeProviderMock>{element}</ThemeProviderMock>)

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
  style: '',
  active: true,
  label: 'Label',
  onToggle: jest.fn()
}
