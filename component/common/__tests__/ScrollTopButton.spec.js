import { shallowMount } from '@vue/test-utils'

import ScrollTopButton from '../ScrollTopButton'

const setUp = () => shallowMount(ScrollTopButton)

describe('ScrollTopButton Component', () => {
  it('should render', () => {
    const wrapper = setUp()

    expect(wrapper.exists()).toBeTruthy()
  })

  it('is a Vue instance', () => {
    const wrapper = setUp()

    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('should render dynamic left-arrow loaded icon', () => {
    const wrapper = setUp()

    expect(wrapper.find('dynamicicon-stub').attributes().icon).toEqual(
      'left-arrow'
    )
  })
})
