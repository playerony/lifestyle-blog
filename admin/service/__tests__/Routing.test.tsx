import React from 'react'
import { mount } from 'enzyme'

import LoginPage from '@page/LoginPage'

import Routing from '../Routing'

describe('Routing Service', () => {
  it('should render LoginPage as default', () => {
    const wrapper = mount(<Routing />)

    expect(wrapper.find(LoginPage).length).toEqual(1)
  })
})
