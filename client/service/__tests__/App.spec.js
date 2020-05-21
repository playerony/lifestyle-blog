import { shallowMount } from '@vue/test-utils'

import App from '../App'

const setUp = () =>
  shallowMount(App, {
    stubs: ['router-link', 'router-view'],
    mocks: {
      $route: {
        fullPath: '/'
      }
    }
  })

describe('App Component', () => {
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

  it('should contain wrapper with proper props', () => {
    const wrapper = setUp()

    expect(wrapper.find('div').attributes()).toEqual({
      id: 'root',
      class: 'app'
    })
  })

  it('should render router views', () => {
    const wrapper = setUp()

    expect(wrapper.exists('router-view-stub')).toBeTruthy()
  })
})
