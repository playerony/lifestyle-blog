import { shallowMount } from '@vue/test-utils'

import Home from '../Home'

const setUp = isLoading => {
  const wrapper = shallowMount(Home, {
    mocks: {
      $apollo: {
        queries: {
          articleList: {
            loading: isLoading,
            data: ARTICLE_LIST_MOCK
          },
          visitorList: {
            data: [],
            loading: isLoading
          },
          commentList: {
            data: [],
            loading: isLoading
          }
        }
      }
    }
  })

  return wrapper
}

describe('Home Page', () => {
  beforeAll(() => {
    console.error = jest.fn()
  })

  it('should render', () => {
    const wrapper = setUp(true)

    expect(wrapper.exists()).toBeTruthy()
  })

  it('is a Vue instance', () => {
    const wrapper = setUp(true)

    console.warn(wrapper.html())
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('should render loader when data is during loading', () => {
    const wrapper = setUp(true)

    expect(wrapper.find('loadingpage-stub').exists()).toBeTruthy()
  })

  it('should render page content when data is loaded', () => {
    const wrapper = setUp(false)

    expect(wrapper.find('home-stub').exists()).toBeTruthy()
  })
})

const ARTICLE_LIST_MOCK = [
  {
    likes: 1,
    articleId: 1,
    title: 'title',
    readingTime: 1,
    description: 'description',
    createdAt: new Date('2020'),
    image: {
      photoUrl: 'photoUrl'
    },
    categoryList: {
      categoryId: 1
    }
  }
]
