import { shallowMount } from '@vue/test-utils'

import ArticleList from '../index'

const setUp = (articles = ARTICLES_MOCK, displayMenu = true) =>
  shallowMount(ArticleList, {
    propsData: { displayMenu, articles }
  })

describe('ArticleCard Component', () => {
  it('should render', () => {
    const wrapper = setUp()

    expect(wrapper.exists()).toBeTruthy()
  })

  it('is a Vue instance', () => {
    const wrapper = setUp()

    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  describe('sorting menu', () => {
    it('should render', () => {
      const wrapper = setUp()

      expect(wrapper.find('ul').exists()).toBeTruthy()
    })

    it('should not render', () => {
      const wrapper = setUp(ARTICLES_MOCK, false)

      expect(wrapper.find('ul').exists()).toBeFalsy()
    })

    it('should render four options', () => {
      const wrapper = setUp()

      expect(wrapper.findAll('menuitem-stub').length).toEqual(4)
    })
  })

  it('should render 4 cards', () => {
    const wrapper = setUp()

    expect(wrapper.findAll('articlecard-stub').length).toEqual(4)
  })

  describe('show more button', () => {
    it('should not render when number of articles is shorter than 4', () => {
      const wrapper = setUp(ARTICLES_MOCK.slice(0, 3))

      expect(wrapper.find('tooltip-stub').exists()).toBeFalsy()
    })

    it('should render when number of articles is longer than 4', () => {
      const wrapper = setUp()

      expect(wrapper.find('tooltip-stub').exists()).toBeTruthy()
    })
  })
})

const ARTICLES_MOCK = [
  {
    likes: 1,
    title: 'title',
    readingTime: 8,
    todayVisitors: 2,
    totalVisitors: 6,
    todayComments: 1,
    totalComments: 10,
    description: 'description',
    image: { photoUrl: 'photoUrl' }
  },
  {
    likes: 1,
    title: 'title2',
    readingTime: 8,
    todayVisitors: 2,
    totalVisitors: 6,
    todayComments: 1,
    totalComments: 10,
    description: 'description2',
    image: { photoUrl: 'photoUrl2' }
  },
  {
    likes: 1,
    title: 'title3',
    readingTime: 8,
    todayVisitors: 2,
    totalVisitors: 6,
    todayComments: 1,
    totalComments: 10,
    description: 'description3',
    image: { photoUrl: 'photoUrl3' }
  },
  {
    likes: 1,
    title: 'title4',
    readingTime: 8,
    todayVisitors: 2,
    totalVisitors: 6,
    todayComments: 1,
    totalComments: 10,
    description: 'description4',
    image: { photoUrl: 'photoUrl4' }
  },
  {
    likes: 1,
    title: 'title5',
    readingTime: 8,
    todayVisitors: 2,
    totalVisitors: 6,
    todayComments: 1,
    totalComments: 10,
    description: 'description5',
    image: { photoUrl: 'photoUrl5' }
  },
  {
    likes: 1,
    title: 'title6',
    readingTime: 8,
    todayVisitors: 2,
    totalVisitors: 6,
    todayComments: 1,
    totalComments: 10,
    description: 'description6',
    image: { photoUrl: 'photoUrl6' }
  }
]
