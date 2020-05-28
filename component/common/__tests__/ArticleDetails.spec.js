import { shallowMount } from '@vue/test-utils'

import ArticleDetails from '../ArticleDetails'

const setUp = () =>
  shallowMount(ArticleDetails, { propsData: { article: ARTICLE_MOCK } })

describe('ArticleDetails Component', () => {
  it('should render', () => {
    const wrapper = setUp()

    expect(wrapper.exists()).toBeTruthy()
  })

  describe('header', () => {
    it('should render four sections', () => {
      const wrapper = setUp()

      expect(wrapper.findAll('p').length).toEqual(4)
    })

    it('should render details about visitors', () => {
      const wrapper = setUp()

      expect(
        wrapper
          .findAll('p')
          .at(0)
          .text()
          .replace(/\s/g, '')
      ).toEqual('6(+2)')
    })

    it('should render details about reading time', () => {
      const wrapper = setUp()

      expect(
        wrapper
          .findAll('p')
          .at(1)
          .text()
      ).toEqual('8 min')
    })

    it('should render details about comments', () => {
      const wrapper = setUp()

      expect(
        wrapper
          .findAll('p')
          .at(2)
          .text()
          .replace(/\s/g, '')
      ).toEqual('10(+1)')
    })

    it('should render details about likes', () => {
      const wrapper = setUp()

      expect(
        wrapper
          .findAll('p')
          .at(3)
          .text()
      ).toEqual('1')
    })
  })

  it('should render article title', () => {
    const wrapper = setUp()

    expect(wrapper.find('h1').text()).toEqual('title')
  })

  it('should render article description', () => {
    const wrapper = setUp()

    expect(wrapper.find('label').text()).toEqual('description')
  })
})

const ARTICLE_MOCK = {
  likes: 1,
  title: 'title',
  readingTime: 8,
  todayVisitors: 2,
  totalVisitors: 6,
  todayComments: 1,
  totalComments: 10,
  description: 'description'
}
