import { shallowMount } from '@vue/test-utils'

import Container from '../Container'

const setUp = () => shallowMount(Container)

describe('Container Component', () => {
  it('should render', () => {
    const wrapper = setUp()

    expect(wrapper.exists()).toBeTruthy()
  })

  it('is a Vue instance', () => {
    const wrapper = setUp()

    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('should contain proper class name', () => {
    const wrapper = setUp()

    expect(wrapper.find(Container).attributes().class).toEqual('container')
  })
})
