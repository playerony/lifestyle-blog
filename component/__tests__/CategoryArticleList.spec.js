import { shallowMount } from '@vue/test-utils'

import CategoryArticleList from '../CategoryArticleList'

const setUp = () =>
  shallowMount(CategoryArticleList, {
    propsData: { articles: ARTICLE_LIST_MOCK, category: CATEGORY_MOCK }
  })

describe('CategoryArticleList Component', () => {
  it('should render', () => {
    const wrapper = setUp()

    expect(wrapper.exists()).toBeTruthy()
  })

  it('is a Vue instance', () => {
    const wrapper = setUp()

    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('should render icon attached to the category', () => {
    const wrapper = setUp()

    expect(wrapper.find('dynamicicon-stub').attributes().icon).toEqual('name')
  })

  it('should render title component', () => {
    const wrapper = setUp()

    expect(wrapper.find('title-stub').attributes().label).toEqual('Name')
  })

  it('should render article list component', () => {
    const wrapper = setUp()

    expect(wrapper.find('articlelist-stub').attributes().articles).toBeDefined()
  })
})

const ARTICLE_LIST_MOCK = [
  {
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
]

const CATEGORY_MOCK = {
  name: 'Name',
  categoryId: 1
}
