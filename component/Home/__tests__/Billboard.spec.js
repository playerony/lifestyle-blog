import { mount } from '@vue/test-utils'

import Billboard from '../Billboard'

const setUp = () =>
  mount(Billboard, {
    propsData: { article: ARTICLE_MOCK }
  })

describe('Billboard Component', () => {
  it('should render', () => {
    const wrapper = setUp()

    expect(wrapper.exists()).toBeTruthy()
  })

  it('is a Vue instance', () => {
    const wrapper = setUp()

    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})

const ARTICLE_MOCK = {
  articleId: 7,
  title: 'title',
  readingTime: 1,
  isPublic: false,
  description: 'description',
  createdAt: new Date('2020'),
  image: {
    photoUrl: 'photoUrl'
  }
}
