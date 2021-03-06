import { shallowMount } from '@vue/test-utils'

import Loading from '../Loading'

const setUp = () => shallowMount(Loading)

describe('Loading Page', () => {
  it('should render', () => {
    const wrapper = setUp()

    expect(wrapper.exists()).toBeTruthy()
  })

  it('should render loader component', () => {
    const wrapper = setUp()

    expect(wrapper.find('loader-stub').exists()).toBeTruthy()
  })
})
