import { mount } from '@vue/test-utils'

import PinnedArticlesSwiper from '../PinnedArticlesSwiper'

const setUp = () =>
  mount(PinnedArticlesSwiper, {
    propsData: { articles: ARTICLES_MOCK }
  })

describe('PinnedArticlesSwiper Component', () => {
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

  it('should return two article cards', () => {
    const wrapper = setUp()

    expect(wrapper.findAll('article').length).toEqual(2)
  })

  it('should contain proper swiper configuration', () => {
    const wrapper = setUp()

    expect(wrapper.vm.swiperOption).toEqual(SWIPER_OPTIONS)
  })

  it('should contain only pinned articles', () => {
    const wrapper = setUp()

    expect(wrapper.vm.getPinnedArticles()).toEqual([
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

const SWIPER_OPTIONS = {
  speed: 500,
  spaceBetween: 0,
  slidesPerView: 1,
  slidesPerGroup: 1,
  watchOverflow: true,
  keyboard: {
    enabled: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  autoplay: {
    delay: 7500,
    disableOnInteraction: false
  },
  breakpoints: {
    1367: {
      spaceBetween: -28,
      slidesPerView: 3,
      slidesPerGroup: 3
    },
    750: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: -26
    }
  }
}
