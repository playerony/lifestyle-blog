import { mount } from '@vue/test-utils'

import Comment from '../Comment'

const setUp = () =>
  mount(Comment, {
    propsData: {
      comment: {
        likes: 1,
        commentId: 1,
        parentCommentId: 2,
        content: 'content',
        creator: 'creator',
        createdAt: new Date('2020')
      },
      handleReply: jest.fn(),
      handleLikeComment: jest.fn(),
      handleDislikeComment: jest.fn()
    }
  })

describe('Comment Component', () => {
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
