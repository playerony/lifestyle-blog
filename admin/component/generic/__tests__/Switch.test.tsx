import React from 'react'
import { mount, ReactWrapper } from 'enzyme'

import Switch from '../Switch'

import ThemeProviderMock from '@admin/component/utility/ThemeProviderMock'

const mountComponent = (element: React.ReactElement): ReactWrapper =>
  mount(<ThemeProviderMock>{element}</ThemeProviderMock>)

const onChangeMock = jest.fn()

describe('Switch Component', () => {
  it('should render', () => {
    const wrapper = mountComponent(<Switch />)

    expect(wrapper.exists()).toBeTruthy()
    expect(wrapper.find('div')).toHaveLength(2)
  })

  it('should trigger onChange function', () => {
    const wrapper = mountComponent(<Switch onChange={onChangeMock} />)

    wrapper.find('div').first().simulate('click')
    expect(onChangeMock).toHaveBeenCalledWith(true)
  })

  it('should initial checked value with true', () => {
    const wrapper = mountComponent(<Switch onChange={onChangeMock} initialValue={true} />)

    wrapper.find('div').first().simulate('click')
    expect(onChangeMock).toHaveBeenCalledWith(false)
  })
})
