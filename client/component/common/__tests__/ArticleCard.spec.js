import { mount } from '@vue/test-utils'

import ArticleCard from '../ArticleCard'

const setUp = () => mount(ArticleCard, { propsData: { article: ARTICLE_MOCK } })

describe('ArticleCard Component', () => {
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

  it('should we wrapped in router-link', () => {
    const wrapper = setUp()

    expect(wrapper.find('router-link').attributes()).toEqual({
      class: 'article-card',
      to: '/article/7'
    })
  })

  it('should render image attached to the article as a background', () => {
    const wrapper = setUp()

    expect(wrapper.find('img').attributes()).toEqual({
      class: 'article-card__image',
      src: 'photoUrl'
    })
  })

  it('should render reading time', () => {
    const wrapper = setUp()

    expect(wrapper.find('p').text()).toEqual('1 min')
  })

  it('should render well formatted article creation date', () => {
    const wrapper = setUp()

    expect(
      wrapper
        .findAll('h4')
        .at(1)
        .text()
    ).toEqual('Jan 01, 2020')
  })

  it('should render article title and description', () => {
    const wrapper = setUp()

    expect(
      wrapper
        .findAll('section')
        .at(0)
        .text()
    ).toEqual('title description')
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
