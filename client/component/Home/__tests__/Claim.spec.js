import { shallowMount } from '@vue/test-utils'

import Claim from '../Claim'

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

    expect(wrapper.find('img').attributes().src).toEqual(
      'https://i.imgur.com/EyME0a9.png'
    )
  })

  it('should render proper text', () => {
    const wrapper = setUp()

    expect(wrapper.find('h1').text()).toEqual(
      `My friend who designed it forced me to write here something. So with this
    blog, I wanna share my experience with
    meditation,
    habits and share things that changed
    totally my life. It is writing down my knowledge in order to systematize
    it and exchange knowledge.`
    )
  })
})
