import { shallowMount } from '@vue/test-utils'

import Billboard from '../Billboard'

const setUp = () =>
  shallowMount(Billboard, {
    stubs: ['router-link', 'router-view'],
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

  describe('img element', () => {
    it('should render img element', () => {
      const wrapper = setUp()

      expect(wrapper.exists('img')).toBeTruthy()
    })

    it('should contain proper props', () => {
      const wrapper = setUp()

      expect(wrapper.find('img').attributes()).toEqual({
        src: 'photoUrl',
        class: 'billboard__image',
        id: 'billboard-background'
      })
    })
  })

  describe('content', () => {
    it('should render header', () => {
      const wrapper = setUp()

      expect(wrapper.find('h2').text()).toEqual('Newest')
    })

    it('should render title', () => {
      const wrapper = setUp()

      expect(wrapper.find('h1').text()).toEqual('title')
    })

    it('should render description', () => {
      const wrapper = setUp()

      expect(
        wrapper
          .findAll('h2')
          .at(1)
          .text()
      ).toEqual('description')
    })
  })

  it('should render link to the article', () => {
    const wrapper = setUp()

    expect(wrapper.find('router-link-stub').text()).toEqual('READ')
    expect(wrapper.find('router-link-stub').attributes()).toEqual({
      to: '/article/7',
      class: 'billboard__link'
    })
  })

  it('should render well formatted data', () => {
    const wrapper = setUp()

    expect(wrapper.find('h3').text()).toEqual('Jan 01, 2020')
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
