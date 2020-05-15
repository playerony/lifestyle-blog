import { mount } from '@vue/test-utils'

import Search from '../Search'

const setUp = isLoading => {
  const wrapper = mount(Search, {
    mocks: {
      $apollo: {
        queries: {
          commentList: {
            data: [],
            loading: isLoading
          },
          articleList: {
            data: [],
            loading: isLoading
          },
          visitorList: {
            data: [],
            loading: isLoading
          }
        }
      }
    }
  })

  return wrapper
}

describe('Search Page', () => {
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

  it('should render input to let user write something', () => {
    const wrapper = setUp(true)

    expect(wrapper.find('input').exists()).toBeTruthy()
    expect(wrapper.find('input').attributes().placeholder).toEqual(
      'Start typing...'
    )
  })

  describe('ArticleList Component', () => {
    it('should not render if loading', () => {
      const wrapper = setUp(true)

      expect(wrapper.find('.article-list').exists()).toBeFalsy()
    })

    it('should render when data was loaded', () => {
      const wrapper = setUp(false)

      expect(wrapper.find('.article-list').exists()).toBeTruthy()
    })
  })
})
