import { shallowMount } from '@vue/test-utils'

import CategoryArticleList from '../CategoryArticleList'

const setUp = isLoading => {
  const wrapper = shallowMount(CategoryArticleList, {
    mocks: {
      $apollo: {
        queries: {
          commentList: {
            data: [],
            loading: isLoading
          },
          visitorListByCategoryId: {
            data: [],
            loading: isLoading
          },
          articleList: {
            loading: isLoading,
            data: ARTICLE_LIST_MOCK
          },
          categoryList: {
            loading: isLoading,
            data: CATEGORY_LIST_MOCK
          }
        }
      },
      $router: {
        params: {
          categoryId: 1
        }
      }
    }
  })

  wrapper.setData({
    commentList: [],
    visitorListByCategoryId: [],
    articleList: ARTICLE_LIST_MOCK,
    categoryList: CATEGORY_LIST_MOCK
  })

  return wrapper
}

describe('CategoryArticleList Page', () => {
  beforeAll(() => {
    console.error = jest.fn()
  })

  it('should render', () => {
    const wrapper = setUp(true)

    expect(wrapper.exists()).toBeTruthy()
  })

  it('is a Vue instance', () => {
    const wrapper = setUp(true)

    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('should render loader when data is during loading', () => {
    const wrapper = setUp(true)

    expect(wrapper.find('loadingpage-stub').exists()).toBeTruthy()
  })

  it('should render page content when data is loaded', () => {
    const wrapper = setUp(false)

    expect(wrapper.find('categoryarticlelist-stub').exists()).toBeTruthy()
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

const CATEGORY_LIST_MOCK = [
  {
    name: 'name',
    categoryId: 1
  }
]
