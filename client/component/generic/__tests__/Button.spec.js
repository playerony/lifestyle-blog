import { mount } from '@vue/test-utils'

import Button from '../Button'

const setUp = (propsData) =>
  mount(Button, { propsData })

describe('Button Component', () => {
  it('should render', () => {
    const wrapper = setUp({ onClick: jest.fn() })

    expect(wrapper.exists()).toBeTruthy()
  })

  it('is a Vue instance', () => {
    const wrapper = setUp({ onClick: jest.fn() })

    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('should contain optional disabled property with default value', () => {
    const wrapper = setUp({ onClick: jest.fn() })

    expect(wrapper.props().disabled).toEqual(false)
  })

  describe('button element', () => {
    it('should render', () => {
      const wrapper = setUp({ onClick: jest.fn() })

      expect(wrapper.exists('button')).toBeTruthy()
    })

    it('should trigger onClick function', () => {
      const onClickMock = jest.fn()
      const wrapper = setUp({ onClick: onClickMock })

      wrapper.find('button').trigger('click')
      expect(onClickMock).toHaveBeenCalled()
    })
  })
})
