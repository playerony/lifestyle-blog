import { mount } from '@vue/test-utils'

import FabButton from '../FabButton'

const setUp = () => mount(FabButton, { slots: { default: '<div />' } })

describe('FabButton Component', () => {
  it('should render', () => {
    const wrapper = setUp()

    expect(wrapper.exists()).toBeTruthy()
  })

  it('is a Vue instance', () => {
    const wrapper = setUp()

    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('should wrap every slot element in li tag', () => {
    const wrapper = setUp()

    expect(wrapper.findAll('li').length).toEqual(1)
  })
})
