import React from 'react'
import { mount } from 'enzyme'

import LoadingPage from '../Loading'
import Loader from '@component/common/Loader'
import ThemeProviderMock from '@component/utility/ThemeProviderMock'

describe('Loading Page', () => {
  it('should render', () => {
    const wrapper = mount(<ThemeProviderMock><LoadingPage /></ThemeProviderMock>)

    expect(wrapper).toBeDefined()
    expect(wrapper.find(Loader).length).toEqual(1)
  })
})
