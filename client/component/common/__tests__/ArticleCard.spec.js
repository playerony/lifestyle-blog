import { shallowMount } from '@vue/test-utils'

import ArticleCard from '../ArticleCard'

const setUp = () =>
  shallowMount(ArticleCard, { propsData: { article: ARTICLE_MOCK } })

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

  it('should render ArticleDetails Component with article prop', () => {
    const wrapper = setUp()

    expect(
      wrapper.find('articledetails-stub').attributes().article
    ).toBeDefined()
  })

  it('should render article image', () => {
    const wrapper = setUp()

    expect(wrapper.find('img').attributes().src).toEqual('photoUrl')
  })

  it('should render read now button', () => {
    const wrapper = setUp()

    expect(wrapper.find('button-stub').text()).toEqual('Czytaj')
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
  description: 'description',
  image: { photoUrl: 'photoUrl' }
}
