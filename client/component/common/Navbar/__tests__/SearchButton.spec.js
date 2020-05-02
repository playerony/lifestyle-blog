import { mount } from '@vue/test-utils'

import SearchButton from '../SearchButton'

const setUp = () => mount(SearchButton)

describe('SearchButton Component', () => {
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
