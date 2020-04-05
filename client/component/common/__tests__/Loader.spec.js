import { shallowMount } from '@vue/test-utils'

import Loader from '../Loader'

const setUp = () => shallowMount(Loader)

describe('Loader Component', () => {
  it('should render', () => {
    const wrapper = setUp()

    expect(wrapper.exists()).toBeTruthy()
    expect(wrapper.findAll('div').length).toEqual(21)
  })

  it('is a Vue instance', () => {
    const wrapper = setUp()

    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('should contain proper class name', () => {
    const wrapper = setUp()

    expect(wrapper.find(Loader).attributes().class).toEqual('loader')
  })

  it('should contain proper class name', () => {
    const wrapper = setUp()

    expect(wrapper.find(Loader).attributes().class).toEqual('loader')
  })
})
