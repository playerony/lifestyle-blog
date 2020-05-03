import { shallowMount } from '@vue/test-utils'

import Home from '../index'

const setUp = () =>
  shallowMount(Home, {
    propsData: { articles: ARTICLES_MOCK }
  })

describe('Home Component', () => {
  it('should render', () => {
    const wrapper = setUp()

    expect(wrapper.exists()).toBeTruthy()
  })

  it('is a Vue instance', () => {
    const wrapper = setUp()

    expect(wrapper.isVueInstance()).toBeTruthy()
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
