import React from 'react'
import { mount, ReactWrapper } from 'enzyme'

import Input from '../Input'

import ThemeProviderMock from '@utility/ThemeProviderMock'

const mountComponent = (element: React.ReactElement): ReactWrapper =>
  mount(<ThemeProviderMock>{element}</ThemeProviderMock>)

describe('Input Component', () => {
  it('should render', () => {
    const wrapper = mountComponent(<Input />)

    expect(wrapper.exists()).toBeTruthy()
  })

  describe('label element', () => {
    it('should not render', () => {
      const wrapper = mountComponent(<Input />)

      expect(wrapper.find('p').length).toEqual(1)
    })

    it('should render', () => {
      const label = 'Label text'
      const wrapper = mountComponent(<Input label={label} />)

      const elementProps = wrapper.find('p').first().props()

      expect(elementProps).toBeDefined()
      expect(elementProps.children).toEqual('Label text')
    })
  })

  describe('error label element', () => {
    it('should render at default', () => {
      const wrapper = mountComponent(<Input />)

      const elementProps = wrapper.find('p').last().props()

      expect(elementProps).toBeDefined()
      expect(elementProps.children).toEqual(undefined)
    })

    it('should render with content', () => {
      const errorMessage = 'Error text'
      const wrapper = mountComponent(<Input errorMessage={errorMessage} />)

      const elementProps = wrapper.find('p').last().props()

      expect(elementProps).toBeDefined()
      expect(elementProps.children).toEqual(errorMessage)
    })
  })

  describe('input element', () => {
    it('should render with default props', () => {
      const wrapper = mountComponent(<Input />)

      expect(wrapper.find('input').props()).toBeDefined()
      expect(wrapper.find('input').props().type).toEqual('text')
      expect(wrapper.find('input').props().onBlur).toBeDefined()
      expect(wrapper.find('input').props().onFocus).toBeDefined()
    })

    it('should pass input props', () => {
      const onClick = jest.fn()
      const placeholder = 'placeholder'

      const wrapper = mountComponent(
        <Input placeholder={placeholder} onClick={onClick} />
      )

      expect(wrapper.find('input').props()).toBeDefined()
      expect(wrapper.find('input').props().placeholder).toEqual(placeholder)
      expect(wrapper.find('input').props().onClick).toBeDefined()
    })

    it('should call an event', () => {
      const onClick = jest.fn()
      const onFocus = jest.fn()

      const wrapper = mountComponent(
        <Input onClick={onClick} onFocus={onFocus} />
      )

      wrapper.find('input').simulate('click')
      expect(onClick).toHaveBeenCalled()

      wrapper.find('input').simulate('focus')
      expect(onFocus).toHaveBeenCalled()
    })
  })
})
