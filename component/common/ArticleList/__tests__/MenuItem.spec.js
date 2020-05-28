import { shallowMount } from '@vue/test-utils'

import MenuItem from '../MenuItem'

const onClickMock = jest.fn()

const setUp = () =>
  shallowMount(MenuItem, {
    propsData: { menuOption: MENU_OPTION_MOCK, onClick: onClickMock }
  })

describe('MenuItem Component', () => {
  it('should render', () => {
    const wrapper = setUp()

    expect(wrapper.exists()).toBeTruthy()
  })

  it('should render menu option with proper label', () => {
    const wrapper = setUp()

    expect(wrapper.find('label').text()).toEqual('label')
  })

  it('should handle click event', () => {
    const wrapper = setUp()

    wrapper.trigger('click')
    expect(onClickMock).toHaveBeenCalledWith('sortingBy')
  })
})

const MENU_OPTION_MOCK = { label: 'label', sortingBy: 'sortingBy' }
