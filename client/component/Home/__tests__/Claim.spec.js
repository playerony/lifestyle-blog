import { shallowMount } from '@vue/test-utils'

import Claim from '../Claim'

import '../../../config/keys'
jest.mock('../../../config/keys', () => ({
  claimImage: 'claimImage'
}))

const setUp = () => shallowMount(Claim)

describe('Claim Component', () => {
  it('should render', () => {
    const wrapper = setUp()

    expect(wrapper.exists()).toBeTruthy()
  })

  it('is a Vue instance', () => {
    const wrapper = setUp()

    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('should render tooltip', () => {
    const wrapper = setUp()

    expect(wrapper.find('tooltip-stub').attributes().title).toEqual(
      'Yes, this is my face'
    )
  })

  it('should render image', () => {
    const wrapper = setUp()

    expect(wrapper.find('img').attributes().src).toEqual('claimImage')
  })

  it('should render proper text', () => {
    const wrapper = setUp()

    expect(wrapper.find('h1').text()).toEqual(
      `My friend who designed this website for me forced me to write something
    here. So with this blog, I would like
    to share my experiences regarding
    meditation,
    habits, and the like. This is a kind
    of therapy for me to sort out what I know. I hope that maybe I can help
    someone with similar problems I encountered in my life.
    I hope you will enjoy it.`
    )
  })
})
