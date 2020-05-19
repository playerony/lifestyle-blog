import { mount } from '@vue/test-utils'

import Article from '..'

const setUp = () =>
  mount(Article, {
    propsData: {
      details: {},
      comments: [],
      isLike: true,
      replyErrorData: {},
      handleReply: jest.fn(),
      handleLikeArticle: jest.fn(),
      handleLikeComment: jest.fn(),
      handleDislikeComment: jest.fn(),
      article: { content: JSON.stringify('{}') }
    }
  })

describe('Article Component', () => {
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
