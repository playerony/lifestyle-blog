import { mount } from '@vue/test-utils'

import ThemeSwitch from '../ThemeSwitch'

const setUp = () => mount(ThemeSwitch)

describe('ThemeSwitch Component', () => {
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
