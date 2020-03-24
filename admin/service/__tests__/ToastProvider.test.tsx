import React from 'react'
import { mount } from 'enzyme'

import ToastProvider from '../ToastProvider'

describe('ToastProvider Provider', () => {
  it('should render', () => {
    const wrapper = mount(<ComponentMock />, {
      wrappingComponent: ToastProvider
    })

    expect(wrapper.exists()).toBeTruthy()
  })
})

const ComponentMock = (): JSX.Element => <h1>Component</h1>
