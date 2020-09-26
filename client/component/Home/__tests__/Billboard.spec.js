import { shallowMount } from '@vue/test-utils'

import Billboard from '../Billboard'

const setUp = () =>
  shallowMount(Billboard, {
    propsData: { article: ARTICLE_MOCK }
  })

describe('Billboard Component', () => {
  it('should render', () => {
    const wrapper = setUp()

    expect(wrapper.exists()).toBeTruthy()
  })

  it('should render details about the article', () => {
    const wrapper = setUp()

    expect(wrapper.find('articledetails-stub').exists()).toBeTruthy()
  })

  it('should render read now button', () => {
    const wrapper = setUp()

    expect(wrapper.find('button-stub').exists()).toBeTruthy()
    expect(wrapper.find('button-stub').text()).toEqual('Czytaj')
  })

  it('should render article image', () => {
    const wrapper = setUp()

    expect(wrapper.find('img').attributes().src).toEqual('photoUrl')
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
