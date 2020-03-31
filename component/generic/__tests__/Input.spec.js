import { mount } from '@vue/test-utils'

import Input from '../Input'

const setUp = propsData => mount(Input, { propsData })

describe('Input Component', () => {
  it('should render', () => {
    const wrapper = setUp()

    expect(wrapper.exists()).toBeTruthy()
  })

  it('is a Vue instance', () => {
    const wrapper = setUp()

    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  describe('input label', () => {
    it('should render', () => {
      const wrapper = setUp()

      expect(wrapper.find('p')).toBeTruthy()
    })

    it('should contain base classname', () => {
      const wrapper = setUp()

      expect(wrapper.find('p').classes()[0]).toEqual('input__label')
    })

    it('should contain another classname when errorMessage prop exists', () => {
      const wrapper = setUp({ errorMessage: 'errorMessage' })

      expect(wrapper.find('p').classes()[1]).toEqual('input__label--error')
    })

    it('should contain another classname when input got focus event', async () => {
      const wrapper = setUp()

      wrapper.find('input').trigger('focus')
      await wrapper.vm.$nextTick()

      expect(wrapper.find('p').classes()[1]).toEqual('input__label--focus')
    })
  })

  describe('input element', () => {
    it('should render', () => {
      const wrapper = setUp()

      expect(wrapper.find('input')).toBeTruthy()
    })

    it('should be a text input as default', () => {
      const wrapper = setUp()

      expect(wrapper.find('input').attributes().type).toEqual('text')
    })

    it('should contain proper classname as default', () => {
      const wrapper = setUp()

      expect(wrapper.find('input').classes()[0]).toEqual('input__content')
    })

    it('should contain another classname when errorMessage prop exists', () => {
      const wrapper = setUp({ errorMessage: 'errorMessage' })

      expect(wrapper.find('input').classes()[1]).toEqual(
        'input__content--error'
      )
    })
  })

  describe('error label', () => {
    it('should render', () => {
      const wrapper = setUp()

      expect(
        wrapper
          .findAll('p')
          .at(1)
          .classes()
      ).toEqual(['input__error-label'])
    })
  })
})
