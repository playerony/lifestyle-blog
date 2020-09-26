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
      `Mój kolega, który zaprojektował dla mnie tę stronę, zmusił mnie żebym
    tutaj coś napisał. Tak więc za pośrednictwem
    tego bloga, chciałbym podzielić się
    swoimi doświadczeniami dotyczącymi
    medytacji,
    budowy nawyków i tym podobnych. Jest
    to dla mnie forma terapii mająca na celu
    uporządkowanie tego co już wiem. Mam
    nadzieję, że uda mi się komuś pomóc.`
    )
  })
})
