import React from 'react'
import { mount } from 'enzyme'

import Loader from '../Loader'

describe('Loader Component', () => {
  it('should render', () => {
    const wrapper = mount(<Loader />)

    expect(wrapper).toBeDefined()
    expect(wrapper.find('div').length).toEqual(21)
  })
})
