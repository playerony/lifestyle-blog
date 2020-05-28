import { shallowMount } from '@vue/test-utils'

import Home from '..'

const setUp = () =>
  shallowMount(Home, {
    propsData: { articles: ARTICLES_MOCK }
  })

describe('Home Component', () => {
  it('should render', () => {
    const wrapper = setUp()

    expect(wrapper.exists()).toBeTruthy()
  })

  it('should render Billboard component', () => {
    const wrapper = setUp()

    expect(wrapper.find('billboard-stub').exists()).toBeTruthy()
  })

  it('should render PinnedArticlesSwiper component', () => {
    const wrapper = setUp()

    expect(wrapper.find('pinnedarticlesswiper-stub').exists()).toBeTruthy()
  })

  it('should render Claim component', () => {
    const wrapper = setUp()

    expect(wrapper.find('claim-stub').exists()).toBeTruthy()
  })

  it('should render ArticleList component', () => {
    const wrapper = setUp()

    expect(wrapper.find('articlelist-stub').exists()).toBeTruthy()
  })

  it('should return proper last added article', () => {
    const wrapper = setUp()

    expect(wrapper.vm.getLastArticle()).toEqual({
      likes: 1,
      title: 'title',
      readingTime: 8,
      todayVisitors: 2,
      totalVisitors: 6,
      todayComments: 1,
      totalComments: 10,
      description: 'description',
      image: { photoUrl: 'photoUrl' },
      categoryList: [{ categoryId: 1 }]
    })
  })

  it('should return proper article list records', () => {
    const wrapper = setUp()

    expect(wrapper.vm.getArticleList()).toEqual([
      {
        likes: 1,
        title: 'title',
        readingTime: 8,
        todayVisitors: 2,
        totalVisitors: 6,
        todayComments: 1,
        totalComments: 10,
        description: 'description',
        image: { photoUrl: 'photoUrl' },
        categoryList: [{ categoryId: 1 }]
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
        image: { photoUrl: 'photoUrl2' },
        categoryList: [{ categoryId: 2 }]
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
        image: { photoUrl: 'photoUrl4' },
        categoryList: [{ categoryId: 1 }]
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
        image: { photoUrl: 'photoUrl5' },
        categoryList: [{ categoryId: 2 }]
      }
    ])
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
    image: { photoUrl: 'photoUrl' },
    categoryList: [{ categoryId: 1 }]
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
    image: { photoUrl: 'photoUrl2' },
    categoryList: [{ categoryId: 2 }]
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
    image: { photoUrl: 'photoUrl3' },
    categoryList: [{ categoryId: 3 }]
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
    image: { photoUrl: 'photoUrl4' },
    categoryList: [{ categoryId: 1 }]
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
    image: { photoUrl: 'photoUrl5' },
    categoryList: [{ categoryId: 2 }]
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
    image: { photoUrl: 'photoUrl6' },
    categoryList: [{ categoryId: 3 }]
  }
]
