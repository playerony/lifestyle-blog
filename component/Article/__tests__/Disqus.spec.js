import { mount } from '@vue/test-utils'

import Disqus from '../Disqus'

const setUp = () =>
  mount(Disqus, {
    propsData: {
      comments: [],
      handleReply: jest.fn(),
      handleLikeComment: jest.fn(),
      handleDislikeComment: jest.fn()
    }
  })

describe('Disqus Component', () => {
  beforeAll(() => {
    console.error = jest.fn()
  })

  it('should render', () => {
    const wrapper = setUp()

    expect(wrapper.exists()).toBeTruthy()
  })

  it('is a Vue instance', () => {
    const wrapper = setUp()

    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
