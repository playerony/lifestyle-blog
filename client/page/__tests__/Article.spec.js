import { shallowMount } from '@vue/test-utils'

import Article from '../Article'

const setUp = isLoading => {
  const wrapper = shallowMount(Article, {
    mocks: {
      $apollo: {
        queries: {
          visitorList: {
            data: [],
            loading: isLoading
          },
          articleById: {
            data: {},
            loading: isLoading
          },
          commentListByArticleId: {
            loading: isLoading,
            data: []
          }
        }
      },
      $route: {
        params: {
          articleId: 1
        }
      }
    }
  })

  return wrapper
}

describe('Article Page', () => {
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

    expect(wrapper.find('article-stub').exists()).toBeTruthy()
  })
})
