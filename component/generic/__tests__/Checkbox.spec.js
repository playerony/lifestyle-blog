import { mount } from '@vue/test-utils'

import Checkbox from '../Checkbox'

const setUp = (propsData) =>
  mount(Checkbox, { propsData })

describe('Checkbox Component', () => {
  it('should render', () => {
    const wrapper = setUp()

    expect(wrapper.exists()).toBeTruthy()
  })

  it('is a Vue instance', () => {
    const wrapper = setUp()

    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('should contain optional isChecked property with default value', () => {
    const wrapper = setUp()

    expect(wrapper.props().isChecked).toEqual(false)
  })

  describe('div element', () => {
    it('should render', () => {
      const wrapper = setUp()
  
      expect(wrapper.exists('div')).toBeTruthy()
      expect(wrapper.find('div').classes()).toEqual(['switch', ''])
    })

    it('should contain proper classnames if checkbox has a check status', async () => {
      const wrapper = setUp({ isChecked: true })

      expect(wrapper.find('div').classes()).toEqual(['switch', 'switch--checked'])
    })
  })
})
