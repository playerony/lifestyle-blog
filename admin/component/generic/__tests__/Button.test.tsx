import React from 'react'
import { mount, ReactWrapper } from 'enzyme'

import Button from '../Button'

import ThemeProviderMock from '@admin/component/utility/ThemeProviderMock'

const mountComponent = (element: React.ReactElement): ReactWrapper =>
  mount(<ThemeProviderMock>{element}</ThemeProviderMock>)

describe('Button Component', () => {
  it('should render', () => {
    const wrapper = mountComponent(<Button />)

    expect(wrapper.exists()).toBeTruthy()
  })

  it('should render with new optional parameters', () => {
    const wrapper = mountComponent(<Button floating={true} marginTop={true} />)

    expect(wrapper.exists()).toBeTruthy()
  })
})
