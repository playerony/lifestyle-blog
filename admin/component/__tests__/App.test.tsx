import * as React from 'react'
import App from '../App'

import { shallow } from 'enzyme'

describe('App Component', () => {
  it('should render', () => {
    const wrapper = shallow(<App />)

    expect(wrapper).toBeDefined()
    expect(wrapper.find('h1').text()).toEqual('Admin')
  })
})
