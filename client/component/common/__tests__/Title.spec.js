import { shallowMount } from '@vue/test-utils'

import Title from '../Title'

const setUp = () => shallowMount(Title, { propsData: { label: 'label' } })

describe('Title Component', () => {
  it('should render', () => {
    const wrapper = setUp()

    expect(wrapper.exists()).toBeTruthy()
  })

  it('is a Vue instance', () => {
    const wrapper = setUp()

    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('should contain proper title label', () => {
    const wrapper = setUp()

    expect(wrapper.find('h1').text()).toEqual('label')
  })
})
