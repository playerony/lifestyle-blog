import { mount } from '@vue/test-utils'

import MobileMenu from '../MobileMenu'

const setUp = () => mount(MobileMenu)

describe('MobileMenu Component', () => {
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
