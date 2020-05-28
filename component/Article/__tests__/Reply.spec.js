import { shallowMount } from '@vue/test-utils'

import Reply from '../Reply'

const handleReplyMock = jest.fn()

const setUp = (handleReply = handleReplyMock) => {
  return shallowMount(Reply, {
    propsData: {
      handleReply
    }
  })
}

describe('Reply Component', () => {
  it('should render', () => {
    const wrapper = setUp()

    expect(wrapper.exists()).toBeTruthy()
  })

  describe('input component', () => {
    it('should render', () => {
      const wrapper = setUp()

      expect(wrapper.exists('input-stub')).toBeTruthy()
    })

    it('should contain proper props', () => {
      const wrapper = setUp()

      const inputProps = wrapper.find('input-stub').attributes()
      expect(inputProps.value).toEqual('')
      expect(inputProps.errormessage).toEqual('')
      expect(inputProps.label).toEqual('Creator')
      expect(inputProps.placeholder).toEqual('Your name...')
    })
  })

  describe('textarea component', () => {
    it('should render', () => {
      const wrapper = setUp()

      expect(wrapper.exists('textarea-stub')).toBeTruthy()
    })

    it('should contain proper props', () => {
      const wrapper = setUp()

      const inputProps = wrapper.find('textarea-stub').attributes()
      expect(inputProps.value).toEqual('')
      expect(inputProps.errormessage).toEqual('')
      expect(inputProps.label).toEqual('Content')
      expect(inputProps.placeholder).toEqual('Join the discussion...')
    })
  })

  describe('button component', () => {
    it('should render', () => {
      const wrapper = setUp()

      expect(wrapper.exists('button-stub')).toBeTruthy()
    })

    it('should contain proper props', () => {
      const wrapper = setUp()

      expect(wrapper.find('button-stub').text()).toEqual('Reply')
    })
  })
})
