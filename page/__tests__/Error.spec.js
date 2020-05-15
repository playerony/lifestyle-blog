import { mount } from '@vue/test-utils'

import Error from '../Error'

const setUp = code => {
  return mount(Error, {
    mocks: {
      $route: {
        params: {
          code
        }
      }
    }
  })
}

describe('Error Page', () => {
  beforeAll(() => {
    console.error = jest.fn()
  })

  it('should render', () => {
    const wrapper = setUp(400)

    expect(wrapper.exists()).toBeTruthy()
  })

  it('is a Vue instance', () => {
    const wrapper = setUp(404)

    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('should render refresh button', () => {
    const wrapper = setUp(404)

    expect(wrapper.find('button').text()).toEqual('Refresh')
  })

  it('should render error code', () => {
    const wrapper = setUp(405)

    expect(wrapper.find('h1').text()).toEqual('405')
  })

  it('should render proper error message', () => {
    const wrapper = setUp(400)

    expect(wrapper.find('label').text()).toEqual('Bad request.')
  })
})
