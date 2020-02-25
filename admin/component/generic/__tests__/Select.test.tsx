import React from 'react'
import CustomSelect from 'react-select'
import { mount, ReactWrapper } from 'enzyme'

import Select from '../Select'

import ThemeProviderMock from '@component/utility/ThemeProviderMock'

const mountComponent = (element: React.ReactElement): ReactWrapper =>
  mount(<ThemeProviderMock>{element}</ThemeProviderMock>)

describe('Select Component', () => {
  it('should render', () => {
    const wrapper = mountComponent(<Select />)

    expect(wrapper.exists()).toBeTruthy()
  })

  describe('label element', () => {
    it('should not render', () => {
      const wrapper = mountComponent(<Select />)

      expect(wrapper.find('p').length).toEqual(1)
    })

    it('should render', () => {
      const label = 'Label text'
      const wrapper = mountComponent(<Select label={label} />)

      const elementProps = wrapper.find('p').first().props()

      expect(elementProps).toBeDefined()
      expect(elementProps.children).toEqual('Label text')
    })
  })

  describe('error label element', () => {
    it('should render at default', () => {
      const wrapper = mountComponent(<Select />)

      const elementProps = wrapper.find('p').last().props()

      expect(elementProps).toBeDefined()
      expect(elementProps.children).toEqual(undefined)
    })

    it('should render with content', () => {
      const errorMessage = 'Error text'
      const wrapper = mountComponent(<Select errorMessage={errorMessage} />)

      const elementProps = wrapper.find('p').last().props()

      expect(elementProps).toBeDefined()
      expect(elementProps.children).toEqual(errorMessage)
    })
  })

  describe('select element', () => {
    it('should render with default props', () => {
      const wrapper = mountComponent(<Select />)

      expect(wrapper.find(CustomSelect).props()).toBeDefined()
      expect(wrapper.find(CustomSelect).props().onBlur).toBeDefined()
      expect(wrapper.find(CustomSelect).props().onFocus).toBeDefined()
    })

    it('should pass Select props', () => {
      const onClick = jest.fn()
      const placeholder = 'placeholder'

      const wrapper = mountComponent(
        <Select placeholder={placeholder} onClick={onClick} />
      )

      expect(wrapper.find(CustomSelect).props()).toBeDefined()
      expect(wrapper.find(CustomSelect).props().onClick).toBeDefined()
      expect(wrapper.find(CustomSelect).props().placeholder).toEqual(placeholder)
    })
  })
})
