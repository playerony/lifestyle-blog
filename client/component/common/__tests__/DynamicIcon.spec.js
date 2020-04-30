import { shallowMount } from '@vue/test-utils'

jest.doMock('../../../../asset/svg/eye.svg', async () => jasmine.any())

const setUp = (icon = 'eye') => {
  const DynamicIcon = require('../DynamicIcon')

  return shallowMount(DynamicIcon, { propsData: { icon } })
}

describe('DynamicIcon Component', () => {
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
})
