import { mount } from '@vue/test-utils'

import Textarea from '../Textarea'

const setUp = propsData => mount(Textarea, { propsData })

describe('Textarea Component', () => {
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

      expect(wrapper.find('p').classes()[0]).toEqual('textarea__label')
    })

    it('should contain another classname when errorMessage prop exists', () => {
      const wrapper = setUp({ errorMessage: 'errorMessage' })

      expect(wrapper.find('p').classes()[1]).toEqual('textarea__label--error')
    })

    it('should contain another classname when textarea got focus event', async () => {
      const wrapper = setUp()

      wrapper.find('textarea').trigger('focus')
      await wrapper.vm.$nextTick()

      expect(wrapper.find('p').classes()[1]).toEqual('textarea__label--focus')
    })
  })

  describe('textarea element', () => {
    it('should render', () => {
      const wrapper = setUp()

      expect(wrapper.find('textarea')).toBeTruthy()
    })

    it('should contain proper classname as default', () => {
      const wrapper = setUp()

      expect(wrapper.find('textarea').classes()[0]).toEqual('textarea__content')
    })

    it('should contain another classname when errorMessage prop exists', () => {
      const wrapper = setUp({ errorMessage: 'errorMessage' })

      expect(wrapper.find('textarea').classes()[1]).toEqual(
        'textarea__content--error'
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
      ).toEqual(['textarea__error-label'])
    })
  })
})
