import { mount } from '@vue/test-utils'

import ThemeSwitch from '../ThemeSwitch'

const setUp = () => mount(ThemeSwitch)

describe('ThemeSwitch Component', () => {
  it('should render', () => {
    const wrapper = setUp()

    expect(wrapper.exists()).toBeTruthy()
  })

  it('is a Vue instance', () => {
    const wrapper = setUp()

    console.warn(wrapper.html())
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
