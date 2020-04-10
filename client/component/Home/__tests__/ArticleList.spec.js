import { shallowMount } from '@vue/test-utils'

import doWatchMediaMock from '@utility/doWatchMediaMock'

const setUp = propsData => {
  const ArticleList = require('../ArticleList').default

  return shallowMount(ArticleList, {
    propsData: {
      label: 'label',
      articles: [ARTICLE_MOCK],
      ...propsData
    }
  })
}

describe('ArticleList Component', () => {
  beforeAll(() => {
    doWatchMediaMock()
  })

  it('should render', () => {
    const wrapper = setUp()

    expect(wrapper.exists()).toBeTruthy()
  })

  it('is a Vue instance', () => {
    const wrapper = setUp()

    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  describe('label element', () => {
    it('should render', () => {
      const wrapper = setUp()

      expect(wrapper.exists('h2')).toBeTruthy()
    })

    it('should contain proper text', () => {
      const wrapper = setUp()

      expect(wrapper.find('h2').text()).toEqual('label')
    })

    it('should contain additional class being responsible for a hover effect', () => {
      const wrapper = setUp({ categoryId: 5 })

      expect(wrapper.find('h2').attributes().class).toEqual(
        'article-list__label article-list__label--hover'
      )
    })
  })

  describe('Slider component', () => {
    it('should render', () => {
      const wrapper = setUp()

      expect(wrapper.exists('slider-stub')).toBeTruthy()
    })

    it('should contain proper props', () => {
      const wrapper = setUp()

      const sliderProps = wrapper.find('slider-stub').attributes()
      expect(sliderProps.responsive).toBeDefined()
      expect(sliderProps.slidestoshow).toEqual('4')
      expect(sliderProps.slidestoscroll).toEqual('4')
    })

    it('should render one article card', () => {
      const wrapper = setUp()

      expect(wrapper.findAll('articlecard-stub')).toHaveLength(1)
    })
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
