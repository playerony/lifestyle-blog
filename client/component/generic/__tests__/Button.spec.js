import { mount } from '@vue/test-utils'
import Button from '../Button'

describe('Button Component', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Button)

    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
