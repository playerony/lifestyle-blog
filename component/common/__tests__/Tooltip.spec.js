import { shallowMount } from '@vue/test-utils'

import Tooltip from '../Tooltip'

const setUp = () => shallowMount(Tooltip, { propsData: { title: 'title' } })

describe('Tooltip Component', () => {
  it('should render', () => {
    const wrapper = setUp()

    expect(wrapper.exists()).toBeTruthy()
  })

  it('should contain proper tooltip title', () => {
    const wrapper = setUp()

    expect(wrapper.find('a').attributes().title).toEqual('title')
  })
})
