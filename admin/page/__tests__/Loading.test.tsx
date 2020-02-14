import React from 'react'
import { mount } from 'enzyme'

import LoadingPage from '../Loading'
import Loader from '@component/common/Loader'

describe('Loading Page', () => {
  it('should render', () => {
    const wrapper = mount(<LoadingPage />)

    expect(wrapper).toBeDefined()
    expect(wrapper.find(Loader).length).toEqual(1)
  })
})
