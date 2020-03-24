import React from 'react'
import { mount } from 'enzyme'

import LoaderProvider from '../LoaderProvider'

describe('LoaderProvider Provider', () => {
  it('should render', () => {
    const wrapper = mount(<ComponentMock />, {
      wrappingComponent: LoaderProvider
    })

    expect(wrapper.exists()).toBeTruthy()
  })
})

const ComponentMock = (): JSX.Element => <h1>Component</h1>
