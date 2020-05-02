import { mount } from '@vue/test-utils'

import Navbar from '../index'

const $route = {
  matched: [
    {
      path: '/'
    }
  ]
}

const setUp = () => mount(Navbar, { mocks: { $route } })

describe('Navbar Component', () => {
  beforeAll(() => {
    console.error = jest.fn()
  })

  it('should render', () => {
    const wrapper = setUp()

    expect(wrapper.exists()).toBeTruthy()
  })

  it('is a Vue instance', () => {
    const wrapper = setUp()

    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
